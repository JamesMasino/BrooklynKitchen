import { Detailed, useGLTF } from "@react-three/drei";
import { useConfig } from "@store";
import extend from "just-extend";
import { useControls } from "leva";
import { Suspense } from "react";
import { ShadowedMesh } from "./Environment";

const config = {
  "model": "coffeePot.glb",
  "128": "/coffeePot/128",
  "512": "/coffeePot/512",
  "1k": "/coffeePot/1k",
  "2k": "/coffeePot/2k",
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

export function CoffeePot(props) {
  const coffeePot = useConfig(e => e.CoffeePot);
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
  const coffeeProps = useControls("Coffee Pot", extend(true, coffeePot, {}), {
    collapsed: true
  });
  return (
    <group
      {...props}
      position={[0.04, 0.94, 0.29]}
      rotation={[0, 0.9, 0]}
      visible={coffeeProps["Coffee Pot"]}
      scale={0.01}
      dispose={null}>
      <Suspense
        fallback={
          <ShadowedMesh
            geometry={nodesLOD128.glass_1["geometry"]}
            material={materials128.glass_1001}
          />
        }>
        <Detailed distances={[1, 2, 3]}>
          <ShadowedMesh
            geometry={nodesLOD2k.glass_1["geometry"]}
            material={materials2k.glass_1001}
          />
          <ShadowedMesh
            geometry={nodesLOD1k.glass_1["geometry"]}
            material={materials1k.glass_1001}
          />
          <ShadowedMesh
            geometry={nodesLOD512.glass_1["geometry"]}
            material={materials512.glass_1001}
          />
        </Detailed>
      </Suspense>

      <Suspense
        fallback={
          <ShadowedMesh
            geometry={nodesLOD128.chromeRim_1["geometry"]}
            material={materials128.chrome_1001}
          />
        }>
        <Detailed distances={[1, 2, 3]}>
          <ShadowedMesh
            geometry={nodesLOD2k.chromeRim_1["geometry"]}
            material={materials2k.chrome_1001}
          />
          <ShadowedMesh
            geometry={nodesLOD1k.chromeRim_1["geometry"]}
            material={materials1k.chrome_1001}
          />
          <ShadowedMesh
            geometry={nodesLOD512.chromeRim_1["geometry"]}
            material={materials512.chrome_1001}
          />
        </Detailed>
      </Suspense>

      <Suspense
        fallback={
          <ShadowedMesh
            geometry={nodesLOD128.lidTop_1["geometry"]}
            material={materials128.plastic_1001}
          />
        }>
        <Detailed distances={[1, 2, 3]}>
          <ShadowedMesh
            geometry={nodesLOD2k.lidTop_1["geometry"]}
            material={materials2k.plastic_1001}
          />
          <ShadowedMesh
            geometry={nodesLOD1k.lidTop_1["geometry"]}
            material={materials1k.plastic_1001}
          />
          <ShadowedMesh
            geometry={nodesLOD512.lidTop_1["geometry"]}
            material={materials512.plastic_1001}
          />
        </Detailed>
      </Suspense>

      <Suspense
        fallback={
          <ShadowedMesh
            geometry={nodesLOD128.lidHandle_1["geometry"]}
            material={materials128.plastic_1001}
          />
        }>
        <Detailed distances={[1, 2, 3]}>
          <ShadowedMesh
            geometry={nodesLOD2k.lidHandle_1["geometry"]}
            material={materials2k.plastic_1001}
          />
          <ShadowedMesh
            geometry={nodesLOD1k.lidHandle_1["geometry"]}
            material={materials1k.plastic_1001}
          />
          <ShadowedMesh
            geometry={nodesLOD512.lidHandle_1["geometry"]}
            material={materials512.plastic_1001}
          />
        </Detailed>
      </Suspense>

      <Suspense
        fallback={
          <ShadowedMesh
            geometry={nodesLOD128.clip_1["geometry"]}
            material={materials128.plastic_1001}
          />
        }>
        <Detailed distances={[1, 2, 3]}>
          <ShadowedMesh
            geometry={nodesLOD2k.clip_1["geometry"]}
            material={materials2k.plastic_1001}
          />
          <ShadowedMesh
            geometry={nodesLOD1k.clip_1["geometry"]}
            material={materials1k.plastic_1001}
          />
          <ShadowedMesh
            geometry={nodesLOD512.clip_1["geometry"]}
            material={materials512.plastic_1001}
          />
        </Detailed>
      </Suspense>

      <Suspense
        fallback={
          <ShadowedMesh
            geometry={nodesLOD128.handle_1["geometry"]}
            material={materials128.plastic_1001}
          />
        }>
        <Detailed distances={[1, 2, 3]}>
          <ShadowedMesh
            geometry={nodesLOD2k.handle_1["geometry"]}
            material={materials2k.plastic_1001}
          />
          <ShadowedMesh
            geometry={nodesLOD1k.handle_1["geometry"]}
            material={materials1k.plastic_1001}
          />
          <ShadowedMesh
            geometry={nodesLOD512.handle_1["geometry"]}
            material={materials512.plastic_1001}
          />
        </Detailed>
      </Suspense>
    </group>
  );
}
