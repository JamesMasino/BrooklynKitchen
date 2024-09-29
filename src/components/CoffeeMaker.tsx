import { Detailed, useGLTF } from "@react-three/drei";
import { useConfig } from "@store";
import extend from "just-extend";
import { useControls } from "leva";
import { Suspense } from "react";
import { ShadowedMesh } from "./Environment";

const config = {
  "model": "coffeeMaker.glb",
  "128": "/coffeeMaker/128",
  "512": "/coffeeMaker/512",
  "1k": "/coffeeMaker/1k",
  "2k": "/coffeeMaker/2k",
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

export function CoffeeMaker(props) {
  const coffeeMaker = useConfig(e => e.CoffeeMaker);
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
  const coffeeMakerProps = useControls(
    "Coffee Maker",
    extend(true, coffeeMaker, {}),
    {
      collapsed: true
    }
  );
  return (
    <group
      {...props}
      position={[0, 0, 0.02]}
      group
      visible={coffeeMakerProps["Coffee Maker"]}
      scale={0.01}
      dispose={null}>
      <Suspense>
        <ShadowedMesh
          geometry={nodesLOD128.screenPanels_1["geometry"]}
          material={materials128.screenLogo_mtl_1001}
        />
        <Detailed distances={[0, 1, 2]}>
          <ShadowedMesh
            geometry={nodesLOD2k.screenPanels_1["geometry"]}
            material={materials2k.screenLogo_mtl_1001}
          />
          <ShadowedMesh
            geometry={nodesLOD1k.screenPanels_1["geometry"]}
            material={materials1k.screenLogo_mtl_1001}
          />
          <ShadowedMesh
            geometry={nodesLOD512.screenPanels_1["geometry"]}
            material={materials512.screenLogo_mtl_1001}
          />
        </Detailed>
      </Suspense>

      <Suspense
        fallback={
          <ShadowedMesh
            geometry={nodesLOD128.makerBase_1["geometry"]}
            material={materials128.blackPlastic_mtl_1001}
          />
        }>
        <Detailed distances={[0, 1, 2]}>
          <ShadowedMesh
            geometry={nodesLOD2k.makerBase_1["geometry"]}
            material={materials2k.blackPlastic_mtl_1001}
          />
          <ShadowedMesh
            geometry={nodesLOD1k.makerBase_1["geometry"]}
            material={materials1k.blackPlastic_mtl_1001}
          />
          <ShadowedMesh
            geometry={nodesLOD512.makerBase_1["geometry"]}
            material={materials512.blackPlastic_mtl_1001}
          />
        </Detailed>
      </Suspense>

      <Suspense
        fallback={
          <ShadowedMesh
            geometry={nodesLOD128.makerPanel_1["geometry"]}
            material={materials128.chromePanel_mtl_1001}
          />
        }>
        <Detailed distances={[0, 1, 2]}>
          <ShadowedMesh
            geometry={nodesLOD2k.makerPanel_1["geometry"]}
            material={materials2k.chromePanel_mtl_1001}
          />
          <ShadowedMesh
            geometry={nodesLOD1k.makerPanel_1["geometry"]}
            material={materials1k.chromePanel_mtl_1001}
          />
          <ShadowedMesh
            geometry={nodesLOD512.makerPanel_1["geometry"]}
            material={materials512.chromePanel_mtl_1001}
          />
        </Detailed>
      </Suspense>

      <Suspense
        fallback={
          <ShadowedMesh
            geometry={nodesLOD128.buttonsLights_1["geometry"]}
            material={materials128.buttonLights_mtl_1001}
          />
        }>
        <Detailed distances={[0, 1, 2]}>
          <ShadowedMesh
            geometry={nodesLOD2k.buttonsLights_1["geometry"]}
            material={materials2k.buttonLights_mtl_1001}
          />
          <ShadowedMesh
            geometry={nodesLOD1k.buttonsLights_1["geometry"]}
            material={materials1k.buttonLights_mtl_1001}
          />
          <ShadowedMesh
            geometry={nodesLOD512.buttonsLights_1["geometry"]}
            material={materials512.buttonLights_mtl_1001}
          />
        </Detailed>
      </Suspense>
    </group>
  );
}
