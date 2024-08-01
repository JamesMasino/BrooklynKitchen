import { useGLTF } from "@react-three/drei";
import { useConfig } from "@store";
import extend from "just-extend";
import { useControls } from "leva";

const config = {
  "model": "lowerCabinetSink.glb",
  "512": "/lowerCabinetSink/512",
  "quality": "512"
};

export function LowerCabinetSink(props) {
  const lowerCabinetSink = useConfig(e => e.LowerCabinetSink);
  const { nodes, materials } = useGLTF(
    `${config[config.quality]}/${config.model}`
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
      rotation={[0, 0, 0]}
      dispose={null}>
      <group scale={0.01}>
        <mesh
          castShadow
          receiveShadow
          visible={lowerCabinetSinkProps["LowerCabinets"]}
          geometry={nodes.l_cabDoor_1["geometry"]}
          material={materials.lowerDoors_mtl_1001}
        />
        <mesh
          castShadow
          receiveShadow
          visible={lowerCabinetSinkProps["LowerCabinets"]}
          geometry={nodes.l_cabDrawer_1["geometry"]}
          material={materials.upperDoors_mtl_1001}
        />
        <mesh
          castShadow
          receiveShadow
          visible={lowerCabinetSinkProps["LowerCabinets"]}
          geometry={nodes.l_lowerCabinent_1["geometry"]}
          material={materials.lCab_mtl_1001}
        />
        <mesh
          castShadow
          receiveShadow
          visible={lowerCabinetSinkProps["LowerCabinets"]}
          geometry={nodes.m_cabDoor_1["geometry"]}
          material={materials.lowerDoors_mtl_1001}
        />
        <mesh
          castShadow
          receiveShadow
          visible={lowerCabinetSinkProps["LowerCabinets"]}
          geometry={nodes.m_cabDrawer_1["geometry"]}
          material={materials.upperDoors_mtl_1001}
        />
        <mesh
          castShadow
          receiveShadow
          visible={lowerCabinetSinkProps["LowerCabinets"]}
          geometry={nodes.m_lowerCabinentSink_1["geometry"]}
          material={materials.mCab_mtl_1001}
        />
        <mesh
          castShadow
          receiveShadow
          visible={lowerCabinetSinkProps["LowerCabinets"]}
          geometry={nodes.r_cabDoor_1["geometry"]}
          material={materials.lowerDoors_mtl_1001}
        />
        <mesh
          castShadow
          receiveShadow
          visible={lowerCabinetSinkProps["LowerCabinets"]}
          geometry={nodes.r_cabDrawer_1["geometry"]}
          material={materials.upperDoors_mtl_1001}
        />
        <mesh
          castShadow
          receiveShadow
          visible={lowerCabinetSinkProps["LowerCabinets"]}
          geometry={nodes.r_lowerCabinentSink_1["geometry"]}
          material={materials.rCab_mtl_1001}
        />
        <mesh
          castShadow
          receiveShadow
          visible={lowerCabinetSinkProps["LowerCabinets"]}
          geometry={nodes.counterTop_1["geometry"]}
          material={materials.counterTop_mtl_1001}
        />
      </group>
    </group>
  );
}
