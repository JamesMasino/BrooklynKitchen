import { Detailed, useGLTF } from "@react-three/drei";
import { useConfig } from "@store";
import extend from "just-extend";
import { useControls } from "leva";
import { Suspense } from "react";
import { ShadowedMesh } from "./Environment";

const config = {
  "model": "lowerCabinetSink.glb",
  "512": "/lowerCabinetSink/512",
  "1k": "/lowerCabinetSink/1k",
  "2k": "/lowerCabinetSink/2k",
  "LOD512": "512",
  "LOD1k": "1k",
  "LOD2k": "2k"
};
const configs = {
  LOD512: config.LOD512,
  LOD1k: config.LOD1k,
  LOD2k: config.LOD2k
};

export function LowerCabinetSink(props) {
  const lowerCabinetSink = useConfig(e => e.LowerCabinetSink);
  const { nodes: nodesLOD512, materials: materials512 } = useGLTF(
    `${config[configs.LOD512]}/${config.model}`
  );
  const { nodes: nodesLOD1k, materials: materials1k } = useGLTF(
    `${config[configs.LOD1k]}/${config.model}`
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
      <Suspense
        fallback={
          <ShadowedMesh
            geometry={nodesLOD512.l_cabDoor_1["geometry"]}
            material={materials512.lowerDoors_mtl_1001}
          />
        }>
        <Detailed distances={[0, 1, 2]}>
          <ShadowedMesh
            geometry={nodesLOD2k.l_cabDoor_1["geometry"]}
            material={materials2k.lowerDoors_mtl_1001}
          />
          <ShadowedMesh
            geometry={nodesLOD1k.l_cabDoor_1["geometry"]}
            material={materials1k.lowerDoors_mtl_1001}
          />
          <ShadowedMesh
            geometry={nodesLOD512.l_cabDoor_1["geometry"]}
            material={materials512.lowerDoors_mtl_1001}
          />
        </Detailed>
      </Suspense>

      <Suspense
        fallback={
          <ShadowedMesh
            geometry={nodesLOD512.l_cabDrawer_1["geometry"]}
            material={materials512.upperDoors_mtl_1001}
          />
        }>
        <Detailed distances={[0, 1, 2]}>
          <ShadowedMesh
            geometry={nodesLOD2k.l_cabDrawer_1["geometry"]}
            material={materials2k.upperDoors_mtl_1001}
          />
          <ShadowedMesh
            geometry={nodesLOD1k.l_cabDrawer_1["geometry"]}
            material={materials1k.upperDoors_mtl_1001}
          />
          <ShadowedMesh
            geometry={nodesLOD512.l_cabDrawer_1["geometry"]}
            material={materials512.upperDoors_mtl_1001}
          />
        </Detailed>
      </Suspense>

      <Suspense
        fallback={
          <ShadowedMesh
            geometry={nodesLOD512.l_lowerCabinent_1["geometry"]}
            material={materials512.lCab_mtl_1001}
          />
        }>
        <Detailed distances={[0, 1, 2]}>
          <ShadowedMesh
            geometry={nodesLOD2k.l_lowerCabinent_1["geometry"]}
            material={materials2k.lCab_mtl_1001}
          />
          <ShadowedMesh
            geometry={nodesLOD1k.l_lowerCabinent_1["geometry"]}
            material={materials1k.lCab_mtl_1001}
          />
          <ShadowedMesh
            geometry={nodesLOD512.l_lowerCabinent_1["geometry"]}
            material={materials512.lCab_mtl_1001}
          />
        </Detailed>
      </Suspense>

      <Suspense
        fallback={
          <ShadowedMesh
            geometry={nodesLOD512.m_cabDoor_1["geometry"]}
            material={materials512.lowerDoors_mtl_1001}
          />
        }>
        <Detailed distances={[0, 1, 2]}>
          <ShadowedMesh
            geometry={nodesLOD2k.m_cabDoor_1["geometry"]}
            material={materials2k.lowerDoors_mtl_1001}
          />
          <ShadowedMesh
            geometry={nodesLOD1k.m_cabDoor_1["geometry"]}
            material={materials1k.lowerDoors_mtl_1001}
          />
          <ShadowedMesh
            geometry={nodesLOD512.m_cabDoor_1["geometry"]}
            material={materials512.lowerDoors_mtl_1001}
          />
        </Detailed>
      </Suspense>

      <Suspense
        fallback={
          <ShadowedMesh
            geometry={nodesLOD512.m_cabDrawer_1["geometry"]}
            material={materials512.upperDoors_mtl_1001}
          />
        }>
        <Detailed distances={[0, 1, 2]}>
          <ShadowedMesh
            geometry={nodesLOD2k.m_cabDrawer_1["geometry"]}
            material={materials2k.upperDoors_mtl_1001}
          />
          <ShadowedMesh
            geometry={nodesLOD1k.m_cabDrawer_1["geometry"]}
            material={materials1k.upperDoors_mtl_1001}
          />
          <ShadowedMesh
            geometry={nodesLOD512.m_cabDrawer_1["geometry"]}
            material={materials512.upperDoors_mtl_1001}
          />
        </Detailed>
      </Suspense>

      <Suspense
        fallback={
          <ShadowedMesh
            geometry={nodesLOD512.m_lowerCabinentSink_1["geometry"]}
            material={materials512.mCab_mtl_1001}
          />
        }>
        <Detailed distances={[0, 1, 2]}>
          <ShadowedMesh
            geometry={nodesLOD2k.m_lowerCabinentSink_1["geometry"]}
            material={materials2k.mCab_mtl_1001}
          />
          <ShadowedMesh
            geometry={nodesLOD1k.m_lowerCabinentSink_1["geometry"]}
            material={materials1k.mCab_mtl_1001}
          />
          <ShadowedMesh
            geometry={nodesLOD512.m_lowerCabinentSink_1["geometry"]}
            material={materials512.mCab_mtl_1001}
          />
        </Detailed>
      </Suspense>

      <Suspense
        fallback={
          <ShadowedMesh
            geometry={nodesLOD512.r_cabDoor_1["geometry"]}
            material={materials512.lowerDoors_mtl_1001}
          />
        }>
        <Detailed distances={[0, 1, 2]}>
          <ShadowedMesh
            geometry={nodesLOD2k.r_cabDoor_1["geometry"]}
            material={materials2k.lowerDoors_mtl_1001}
          />
          <ShadowedMesh
            geometry={nodesLOD1k.r_cabDoor_1["geometry"]}
            material={materials1k.lowerDoors_mtl_1001}
          />
          <ShadowedMesh
            geometry={nodesLOD512.r_cabDoor_1["geometry"]}
            material={materials512.lowerDoors_mtl_1001}
          />
        </Detailed>
      </Suspense>

      <Suspense
        fallback={
          <ShadowedMesh
            geometry={nodesLOD512.r_cabDrawer_1["geometry"]}
            material={materials512.upperDoors_mtl_1001}
          />
        }>
        <Detailed distances={[0, 1, 2]}>
          <ShadowedMesh
            geometry={nodesLOD2k.r_cabDrawer_1["geometry"]}
            material={materials2k.upperDoors_mtl_1001}
          />
          <ShadowedMesh
            geometry={nodesLOD1k.r_cabDrawer_1["geometry"]}
            material={materials1k.upperDoors_mtl_1001}
          />
          <ShadowedMesh
            geometry={nodesLOD512.r_cabDrawer_1["geometry"]}
            material={materials512.upperDoors_mtl_1001}
          />
        </Detailed>
      </Suspense>

      <Suspense
        fallback={
          <ShadowedMesh
            geometry={nodesLOD512.r_lowerCabinentSink_1["geometry"]}
            material={materials512.rCab_mtl_1001}
          />
        }>
        <Detailed distances={[0, 1, 2]}>
          <ShadowedMesh
            geometry={nodesLOD2k.r_lowerCabinentSink_1["geometry"]}
            material={materials2k.rCab_mtl_1001}
          />
          <ShadowedMesh
            geometry={nodesLOD1k.r_lowerCabinentSink_1["geometry"]}
            material={materials1k.rCab_mtl_1001}
          />
          <ShadowedMesh
            geometry={nodesLOD512.r_lowerCabinentSink_1["geometry"]}
            material={materials512.rCab_mtl_1001}
          />
        </Detailed>
      </Suspense>

      <Suspense
        fallback={
          <ShadowedMesh
            geometry={nodesLOD512.counterTop_1["geometry"]}
            material={materials512.counterTop_mtl_1001}
          />
        }>
        <Detailed distances={[0, 1, 2]}>
          <ShadowedMesh
            geometry={nodesLOD2k.counterTop_1["geometry"]}
            material={materials2k.counterTop_mtl_1001}
          />
          <ShadowedMesh
            geometry={nodesLOD1k.counterTop_1["geometry"]}
            material={materials1k.counterTop_mtl_1001}
          />
          <ShadowedMesh
            geometry={nodesLOD512.counterTop_1["geometry"]}
            material={materials512.counterTop_mtl_1001}
          />
        </Detailed>
      </Suspense>
    </group>
  );
}
