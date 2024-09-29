import { Detailed, useGLTF } from "@react-three/drei";
import { useConfig } from "@store";
import extend from "just-extend";
import { useControls } from "leva";
import { Suspense } from "react";
import { ShadowedMesh } from "./Environment";

const config = {
  "model": "lowerCabinetSink.glb",
  "128": "/lowerCabinetSink/128",
  "512": "/lowerCabinetSink/512",
  "1k": "/lowerCabinetSink/1k",
  "2k": "/lowerCabinetSink/2k",
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

export function LowerCabinetSink(props) {
  const lowerCabinetSink = useConfig(e => e.LowerCabinetSink);
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
            geometry={nodesLOD128.counterTop_1["geometry"]}
            material={materials128.counterTop_mtl_1001}
          />
        }>
        <Detailed distances={[0, 2, 3]}>
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
      <Suspense
        fallback={
          <ShadowedMesh
            geometry={nodesLOD128.doorsDrawers_1["geometry"]}
            material={materials128.doorsDrawers_mtl_1001}
          />
        }>
        <Detailed distances={[0, 2, 3]}>
          <ShadowedMesh
            geometry={nodesLOD2k.doorsDrawers_1["geometry"]}
            material={materials2k.doorsDrawers_mtl_1001}
          />
          <ShadowedMesh
            geometry={nodesLOD1k.doorsDrawers_1["geometry"]}
            material={materials1k.doorsDrawers_mtl_1001}
          />
          <ShadowedMesh
            geometry={nodesLOD512.doorsDrawers_1["geometry"]}
            material={materials512.doorsDrawers_mtl_1001}
          />
        </Detailed>
      </Suspense>
      <Suspense
        fallback={
          <ShadowedMesh
            geometry={nodesLOD128.cabinets_1["geometry"]}
            material={materials128.cabinets_mtl_1001}
          />
        }>
        <Detailed distances={[0, 2, 3]}>
          <ShadowedMesh
            geometry={nodesLOD2k.cabinets_1["geometry"]}
            material={materials2k.cabinets_mtl_1001}
          />
          <ShadowedMesh
            geometry={nodesLOD1k.cabinets_1["geometry"]}
            material={materials1k.cabinets_mtl_1001}
          />
          <ShadowedMesh
            geometry={nodesLOD512.cabinets_1["geometry"]}
            material={materials512.cabinets_mtl_1001}
          />
        </Detailed>
      </Suspense>
    </group>
  );
}
