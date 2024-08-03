import { useGLTF } from "@react-three/drei";
import { useConfig } from "@store";
import extend from "just-extend";
import { useControls } from "leva";

const config = {
  "model": "fridge.glb",
  "512": "/fridge/512",
  "quality": "512"
};

export function Fridge(props) {
  const fridge = useConfig(e => e.Fridge);
  const { nodes, materials } = useGLTF(
    `${config[config.quality]}/${config.model}`
  );
  const fridgeProps = useControls("Fridge", extend(true, fridge, {}), {
    collapsed: true
  });
  return (
    <group {...props} position={[0.02, 0, 0]} dispose={null}>
      <group scale={0.01}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.fridgeBox_1["geometry"]}
          material={materials.fridgeBox_mtl_1001}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.upperDoor_1["geometry"]}
          material={materials.fridgeDoors_mtl_1001}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.lowerDoor_1["geometry"]}
          material={materials.fridgeDoors_mtl_1001}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.rUpperHandle_1["geometry"]}
          material={materials.handle_mtl_1001}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.lUpperHandle_1["geometry"]}
          material={materials.handle_mtl_1001}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.rLowerHandle_1["geometry"]}
          material={materials.handle_mtl_1001}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.lLowerHandle_1["geometry"]}
          material={materials.handle_mtl_1001}
        />
      </group>
    </group>
  );
}
