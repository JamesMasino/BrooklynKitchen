import { Detailed, useGLTF } from "@react-three/drei";
import { useConfig } from "@store";
import extend from "just-extend";
import { useControls } from "leva";
import { Suspense } from "react";
import { ShadowedMesh } from "./Environment";

const config = {
  "model": "upperCabinets.glb",
  "128": "/upperCabinets/128",
  "512": "/upperCabinets/512",
  "1k": "/upperCabinets/1k",
  "2k": "/upperCabinets/2k",
  "LOD128": "128",
  "LOD512": "512",
  "LOD1k": "1k",
  "LOD2k": "2k"
};
const configs = {
  LOD128: config.LOD128,
  LOD512: config.LOD512,
  LOD1k: config.LOD1k,
  LOD2k: config.LOD2k
};

export function UpperCabinets(props) {
  const upperCabinets = useConfig(e => e.UpperCabinets);
  const { nodes: nodesLOD128, materials: materials128 } = useGLTF(
    `${config[configs.LOD512]}/${config.model}`
  );
  const { nodes: nodesLOD512, materials: materials512 } = useGLTF(
    `${config[configs.LOD512]}/${config.model}`
  );
  const { nodes: nodesLOD1k, materials: materials1k } = useGLTF(
    `${config[configs.LOD1k]}/${config.model}`
  );
  const { nodes: nodesLOD2k, materials: materials2k } = useGLTF(
    `${config[configs.LOD2k]}/${config.model}`
  );
  const upperCabinetsProps = useControls(
    "Upper Cabinets",
    extend(true, upperCabinets, {}),
    { collapsed: true }
  );
  return (
    <group
      {...props}
      position={[0, 0, 0]}
      visible={upperCabinetsProps["UpperCabinets"]}
      scale={0.01}
      dispose={null}>
      <Suspense
        fallback={
          <ShadowedMesh
            geometry={nodesLOD128.r_cabinent_1["geometry"]}
            material={materials128.cabinent_mtl_1001}
          />
        }>
        <Detailed distances={[0, 2, 3]}>
          <ShadowedMesh
            geometry={nodesLOD2k.r_cabinent_1["geometry"]}
            material={materials2k.cabinent_mtl_1001}
          />
          <ShadowedMesh
            geometry={nodesLOD1k.r_cabinent_1["geometry"]}
            material={materials1k.cabinent_mtl_1001}
          />
          <ShadowedMesh
            geometry={nodesLOD512.r_cabinent_1["geometry"]}
            material={materials512.cabinent_mtl_1001}
          />
        </Detailed>
      </Suspense>
      <Suspense
        fallback={
          <ShadowedMesh
            geometry={nodesLOD128.rm_cabinent_1["geometry"]}
            material={materials128.cabinent_mtl_1001}
          />
        }>
        <Detailed distances={[0, 2, 3]}>
          <ShadowedMesh
            geometry={nodesLOD2k.rm_cabinent_1["geometry"]}
            material={materials2k.cabinent_mtl_1001}
          />
          <ShadowedMesh
            geometry={nodesLOD1k.rm_cabinent_1["geometry"]}
            material={materials1k.cabinent_mtl_1001}
          />
          <ShadowedMesh
            geometry={nodesLOD512.rm_cabinent_1["geometry"]}
            material={materials512.cabinent_mtl_1001}
          />
        </Detailed>
      </Suspense>
      <Suspense
        fallback={
          <ShadowedMesh
            geometry={nodesLOD128.lm_cabinent_1["geometry"]}
            material={materials128.cabinent_mtl_1001}
          />
        }>
        <Detailed distances={[0, 2, 3]}>
          <ShadowedMesh
            geometry={nodesLOD2k.lm_cabinent_1["geometry"]}
            material={materials2k.cabinent_mtl_1001}
          />
          <ShadowedMesh
            geometry={nodesLOD1k.lm_cabinent_1["geometry"]}
            material={materials1k.cabinent_mtl_1001}
          />
          <ShadowedMesh
            geometry={nodesLOD512.lm_cabinent_1["geometry"]}
            material={materials512.cabinent_mtl_1001}
          />
        </Detailed>
      </Suspense>
      <Suspense
        fallback={
          <ShadowedMesh
            geometry={nodesLOD128.l_cabinent_1["geometry"]}
            material={materials128.cabinent_mtl_1001}
          />
        }>
        <Detailed distances={[0, 2, 3]}>
          <ShadowedMesh
            geometry={nodesLOD2k.l_cabinent_1["geometry"]}
            material={materials2k.cabinent_mtl_1001}
          />
          <ShadowedMesh
            geometry={nodesLOD1k.l_cabinent_1["geometry"]}
            material={materials1k.cabinent_mtl_1001}
          />
          <ShadowedMesh
            geometry={nodesLOD512.l_cabinent_1["geometry"]}
            material={materials512.cabinent_mtl_1001}
          />
        </Detailed>
      </Suspense>
      <Suspense
        fallback={
          <ShadowedMesh
            geometry={nodesLOD128.r_bottom_1["geometry"]}
            material={materials128.cabBottom_mtl_1001}
          />
        }>
        <Detailed distances={[0, 2, 3]}>
          <ShadowedMesh
            geometry={nodesLOD2k.r_bottom_1["geometry"]}
            material={materials2k.cabBottom_mtl_1001}
          />
          <ShadowedMesh
            geometry={nodesLOD1k.r_bottom_1["geometry"]}
            material={materials1k.cabBottom_mtl_1001}
          />
          <ShadowedMesh
            geometry={nodesLOD512.r_bottom_1["geometry"]}
            material={materials512.cabBottom_mtl_1001}
          />
        </Detailed>
      </Suspense>
      <Suspense
        fallback={
          <ShadowedMesh
            geometry={nodesLOD128.rm_bottom_1["geometry"]}
            material={materials128.cabBottom_mtl_1001}
          />
        }>
        <Detailed distances={[0, 2, 3]}>
          <ShadowedMesh
            geometry={nodesLOD2k.rm_bottom_1["geometry"]}
            material={materials2k.cabBottom_mtl_1001}
          />
          <ShadowedMesh
            geometry={nodesLOD1k.rm_bottom_1["geometry"]}
            material={materials1k.cabBottom_mtl_1001}
          />
          <ShadowedMesh
            geometry={nodesLOD512.rm_bottom_1["geometry"]}
            material={materials512.cabBottom_mtl_1001}
          />
        </Detailed>
      </Suspense>
      <Suspense
        fallback={
          <ShadowedMesh
            geometry={nodesLOD128.lm_bottom_1["geometry"]}
            material={materials128.cabBottom_mtl_1001}
          />
        }>
        <Detailed distances={[0, 2, 3]}>
          <ShadowedMesh
            geometry={nodesLOD2k.lm_bottom_1["geometry"]}
            material={materials2k.cabBottom_mtl_1001}
          />
          <ShadowedMesh
            geometry={nodesLOD1k.lm_bottom_1["geometry"]}
            material={materials1k.cabBottom_mtl_1001}
          />
          <ShadowedMesh
            geometry={nodesLOD512.lm_bottom_1["geometry"]}
            material={materials512.cabBottom_mtl_1001}
          />
        </Detailed>
      </Suspense>
      <Suspense
        fallback={
          <ShadowedMesh
            geometry={nodesLOD128.l_bottom_1["geometry"]}
            material={materials128.cabBottom_mtl_1001}
          />
        }>
        <Detailed distances={[0, 2, 3]}>
          <ShadowedMesh
            geometry={nodesLOD2k.l_bottom_1["geometry"]}
            material={materials2k.cabBottom_mtl_1001}
          />
          <ShadowedMesh
            geometry={nodesLOD1k.l_bottom_1["geometry"]}
            material={materials1k.cabBottom_mtl_1001}
          />
          <ShadowedMesh
            geometry={nodesLOD512.l_bottom_1["geometry"]}
            material={materials512.cabBottom_mtl_1001}
          />
        </Detailed>
      </Suspense>
      <Suspense
        fallback={
          <ShadowedMesh
            geometry={nodesLOD128.r_cabDoor_1["geometry"]}
            material={materials128.cabDoor_mtl_1001}
          />
        }>
        <Detailed distances={[0, 2, 3]}>
          <ShadowedMesh
            geometry={nodesLOD2k.r_cabDoor_1["geometry"]}
            material={materials2k.cabDoor_mtl_1001}
          />
          <ShadowedMesh
            geometry={nodesLOD1k.r_cabDoor_1["geometry"]}
            material={materials1k.cabDoor_mtl_1001}
          />
          <ShadowedMesh
            geometry={nodesLOD512.r_cabDoor_1["geometry"]}
            material={materials512.cabDoor_mtl_1001}
          />
        </Detailed>
      </Suspense>
      <Suspense
        fallback={
          <ShadowedMesh
            geometry={nodesLOD128.rm_cabDoor_1["geometry"]}
            material={materials128.cabDoor_mtl_1001}
          />
        }>
        <Detailed distances={[0, 2, 3]}>
          <ShadowedMesh
            geometry={nodesLOD2k.rm_cabDoor_1["geometry"]}
            material={materials2k.cabDoor_mtl_1001}
          />
          <ShadowedMesh
            geometry={nodesLOD1k.rm_cabDoor_1["geometry"]}
            material={materials1k.cabDoor_mtl_1001}
          />
          <ShadowedMesh
            geometry={nodesLOD512.rm_cabDoor_1["geometry"]}
            material={materials512.cabDoor_mtl_1001}
          />
        </Detailed>
      </Suspense>
      <Suspense
        fallback={
          <ShadowedMesh
            geometry={nodesLOD128.lm_cabDoor_1["geometry"]}
            material={materials128.cabDoor_mtl_1001}
          />
        }>
        <Detailed distances={[0, 2, 3]}>
          <ShadowedMesh
            geometry={nodesLOD2k.lm_cabDoor_1["geometry"]}
            material={materials2k.cabDoor_mtl_1001}
          />
          <ShadowedMesh
            geometry={nodesLOD1k.lm_cabDoor_1["geometry"]}
            material={materials1k.cabDoor_mtl_1001}
          />
          <ShadowedMesh
            geometry={nodesLOD512.lm_cabDoor_1["geometry"]}
            material={materials512.cabDoor_mtl_1001}
          />
        </Detailed>
      </Suspense>
      <Suspense
        fallback={
          <ShadowedMesh
            geometry={nodesLOD128.l_cabDoor_1["geometry"]}
            material={materials128.cabDoor_mtl_1001}
          />
        }>
        <Detailed distances={[0, 2, 3]}>
          <ShadowedMesh
            geometry={nodesLOD2k.l_cabDoor_1["geometry"]}
            material={materials2k.cabDoor_mtl_1001}
          />
          <ShadowedMesh
            geometry={nodesLOD1k.l_cabDoor_1["geometry"]}
            material={materials1k.cabDoor_mtl_1001}
          />
          <ShadowedMesh
            geometry={nodesLOD512.l_cabDoor_1["geometry"]}
            material={materials512.cabDoor_mtl_1001}
          />
        </Detailed>
      </Suspense>
    </group>
  );
}
