import { useGLTF } from "@react-three/drei";
import { useConfig } from "@store";
import extend from "just-extend";
import { useControls } from "leva";

const config = {
  "model": "coffeeMaker.glb",
  "512": "/coffeeMaker/512",
  "quality": "512"
};

export function CoffeeMaker(props) {
  const coffeeMaker = useConfig(e => e.CoffeeMaker);
  const { nodes, materials } = useGLTF(
    `${config[config.quality]}/${config.model}`
  );
  const coffeeMakerProps = useControls(
    "Coffee Maker",
    extend(true, coffeeMaker, {}),
    {
      collapsed: true
    }
  );
  return (
    <group {...props} position={[0, 0, 0.02]} dispose={null}>
      <group scale={0.01}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.makerBase_1["geometry"]}
          material={materials.blackPlastic_mtl_1001}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.makerPanel_1["geometry"]}
          material={materials.chromePanel_mtl_1001}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.screenPanel_1["geometry"]}
          material={materials.screen_mtl_1001}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.hourMinuteButton_1["geometry"]}
          material={materials.button_mtl_1001}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.delayTimerButton_1["geometry"]}
          material={materials.button_mtl_1001}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.brewButton_1["geometry"]}
          material={materials.button_mtl_1001}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.selectButton_1["geometry"]}
          material={materials.button_mtl_1001}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.logoPanel_1["geometry"]}
          material={materials.logo_mtl_1001}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.strongLight_1["geometry"]}
          material={materials.light_mtl_1001}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.delayLight_1["geometry"]}
          material={materials.light_mtl_1001}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.regularLight_1["geometry"]}
          material={materials.light_mtl_1001}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.nowLight_1["geometry"]}
          material={materials.light_mtl_1001}
        />
      </group>
    </group>
  );
}
