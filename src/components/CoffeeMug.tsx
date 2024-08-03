import { useGLTF } from "@react-three/drei";
import { useConfig } from "@store";
import extend from "just-extend";
import { useControls } from "leva";

const config = {
  "model": "coffeeMug.glb",
  "512": "/coffeeMug/512",
  "quality": "512"
};

export function CoffeeMug(props) {
  const coffeeMug = useConfig(e => e.CoffeeMug);
  const { nodes, materials } = useGLTF(
    `${config[config.quality]}/${config.model}`
  );
  const coffeeMugProps = useControls(
    "Coffee Mug",
    extend(true, coffeeMug, {}),
    { collapsed: true }
  );
  return (
    <group
      {...props}
      position={[-0, 0.915, 0.5]}
      rotation={[0, -70, 0]}
      dispose={null}>
      <group scale={0.01}>
        <mesh
          castShadow
          receiveShadow
          visible={coffeeMugProps["Mug"]}
          geometry={nodes.mug_1["geometry"]}
          material={materials.ceramic_mtl_1001}
        />
      </group>
    </group>
  );
}
