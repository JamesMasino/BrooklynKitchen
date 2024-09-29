import { Detailed, useGLTF } from "@react-three/drei";
import { useConfig } from "@store";
import extend from "just-extend";
import { useControls } from "leva";
import { Suspense } from "react";
import { ShadowedMesh } from "./Environment";

const config = {
  "model": "coffeeMug.glb",
  "128": "/coffeeMug/128",
  "512": "/coffeeMug/512",
  "1k": "/coffeeMug/1k",
  "2k": "/coffeeMug/2k",
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

export function CoffeeMug(props) {
  const coffeeMug = useConfig(e => e.CoffeeMug);
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
  const coffeeMugProps = useControls(
    "Coffee Mug",
    extend(true, coffeeMug, {}),
    { collapsed: true }
  );
  return (
    <group
      {...props}
      position={[-0.05, 0.915, 0.5]}
      rotation={[0, -70, 0]}
      visible={coffeeMugProps["Mug"]}
      scale={0.01}
      dispose={null}>
      <Suspense
        fallback={
          <ShadowedMesh
            geometry={nodesLOD128.mug_1["geometry"]}
            material={materials128.ceramic_mtl_1001}
          />
        }>
        <Detailed distances={[0, 1, 2]}>
          <ShadowedMesh
            geometry={nodesLOD2k.mug_1["geometry"]}
            material={materials2k.ceramic_mtl_1001}
          />
          <ShadowedMesh
            geometry={nodesLOD1k.mug_1["geometry"]}
            material={materials1k.ceramic_mtl_1001}
          />
          <ShadowedMesh
            geometry={nodesLOD512.mug_1["geometry"]}
            material={materials512.ceramic_mtl_1001}
          />
        </Detailed>
      </Suspense>
    </group>
  );
}
