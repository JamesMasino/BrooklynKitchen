import { useGLTF } from "@react-three/drei";
import { useConfig } from "@store";
import extend from "just-extend";
import { useControls } from "leva";

const config = {
  "model": "coffeePot.glb",
  "512": "/coffeePot/512",
  "quality": "512"
};

export function CoffeePot(props) {
  const coffeePot = useConfig(e => e.CoffeePot);
  const { nodes, materials } = useGLTF(
    `${config[config.quality]}/${config.model}`
  );
  const coffeeProps = useControls("Coffee Pot", extend(true, coffeePot, {}), {
    collapsed: true
  });
  return (
    <group
      {...props}
      position={[0.04, 0.94, 0.29]}
      rotation={[0, 0.9, 0]}
      dispose={null}>
      <group scale={0.01}>
        <mesh
          castShadow
          receiveShadow
          visible={coffeeProps["Glass"]}
          geometry={nodes.glass_1["geometry"]}
          material={materials.glass_1001}
        />
        <mesh
          castShadow
          receiveShadow
          visible={coffeeProps["Rim"]}
          geometry={nodes.chromeRim_1["geometry"]}
          material={materials.chrome_1001}
        />
        <mesh
          castShadow
          receiveShadow
          visible={coffeeProps["Lid"]}
          geometry={nodes.lidTop_1["geometry"]}
          material={materials.plastic_1001}
        />
        <mesh
          castShadow
          receiveShadow
          visible={coffeeProps["LidHandle"]}
          geometry={nodes.lidHandle_1["geometry"]}
          material={materials.plastic_1001}
        />
        <mesh
          castShadow
          receiveShadow
          visible={coffeeProps["Clip"]}
          geometry={nodes.clip_1["geometry"]}
          material={materials.plastic_1001}
        />
        <mesh
          castShadow
          receiveShadow
          visible={coffeeProps["Handle"]}
          geometry={nodes.handle_1["geometry"]}
          material={materials.plastic_1001}
        />
      </group>
    </group>
  );
}
