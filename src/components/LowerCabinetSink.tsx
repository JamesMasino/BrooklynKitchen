import { Detailed, useGLTF } from "@react-three/drei";
import { useConfig } from "@store";
import extend from "just-extend";
import { useControls } from "leva";

const config = {
  "model": "lowerCabinetSink.glb",
  "512": "/lowerCabinetSink/512",
  "1k": "/lowerCabinetSink/1k",
  "2k": "/lowerCabinetSink/2k",
  "LOD512": "512",
  "LOD2k": "2k"
};
const configs = {
  LOD512: config.LOD512,
  LOD2k: config.LOD2k
};

export function LowerCabinetSink(props) {
  const lowerCabinetSink = useConfig(e => e.LowerCabinetSink);
  const { nodes: nodesLOD512, materials: materials512 } = useGLTF(
    `${config[configs.LOD512]}/${config.model}`
  );
  const { nodes: nodesLOD2k, materials: materials2k } = useGLTF(
    `${config[configs.LOD2k]}/${config.model}`
  );
  const lowerCabinetSinkProps = useControls(
    "Lower Cabinets",
    extend(true, lowerCabinetSink, {}),
    { collapsed: true }
  );
  return (
    <group
      {...{ ...props, ...lowerCabinetSinkProps }}
      position={[0.48, 0, 0.35]}
      visible={lowerCabinetSinkProps["LowerCabinets"]}
      scale={0.01}
      dispose={null}>
      <Detailed distances={[0, 1]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodesLOD2k.l_cabDoor_1["geometry"]}
          material={materials2k.lowerDoors_mtl_1001}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodesLOD512.l_cabDoor_1["geometry"]}
          material={materials512.lowerDoors_mtl_1001}
        />
      </Detailed>
      <group>
        <mesh
          castShadow
          receiveShadow
          geometry={nodesLOD512.l_cabDrawer_1["geometry"]}
          material={materials512.upperDoors_mtl_1001}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodesLOD512.l_lowerCabinent_1["geometry"]}
          material={materials512.lCab_mtl_1001}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodesLOD512.m_cabDoor_1["geometry"]}
          material={materials512.lowerDoors_mtl_1001}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodesLOD512.m_cabDrawer_1["geometry"]}
          material={materials512.upperDoors_mtl_1001}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodesLOD512.m_lowerCabinentSink_1["geometry"]}
          material={materials512.mCab_mtl_1001}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodesLOD512.r_cabDoor_1["geometry"]}
          material={materials512.lowerDoors_mtl_1001}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodesLOD512.r_cabDrawer_1["geometry"]}
          material={materials512.upperDoors_mtl_1001}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodesLOD512.r_lowerCabinentSink_1["geometry"]}
          material={materials512.rCab_mtl_1001}
        />
      </group>
      <Detailed distances={[0, 1]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodesLOD2k.counterTop_1["geometry"]}
          material={materials2k.counterTop_mtl_1001}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodesLOD512.counterTop_1["geometry"]}
          material={materials512.counterTop_mtl_1001}
        />
      </Detailed>
    </group>
  );
}
