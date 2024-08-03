import { useGLTF } from "@react-three/drei";
import { useConfig } from "@store";
import extend from "just-extend";
import { useControls } from "leva";

const config = {
  "model": "upperCabinets.glb",
  "512": "/upperCabinets/512",
  "quality": "512"
};

export function UpperCabinets(props) {
  const upperCabinets = useConfig(e => e.UpperCabinets);
  const { nodes, materials } = useGLTF(
    `${config[config.quality]}/${config.model}`
  );
  const upperCabinetsProps = useControls(
    "Coffee Mug",
    extend(true, upperCabinets, {}),
    { collapsed: true }
  );
  return (
    <group {...props} position={[0, 0, 0]} dispose={null}>
      <group scale={0.01}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.r_cabinent_1["geometry"]}
          material={materials.cabinent_mtl_1001}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.rm_cabinent_1["geometry"]}
          material={materials.cabinent_mtl_1001}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.lm_cabinent_1["geometry"]}
          material={materials.cabinent_mtl_1001}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.l_cabinent_1["geometry"]}
          material={materials.cabinent_mtl_1001}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.r_bottom_1["geometry"]}
          material={materials.cabBottom_mtl_1001}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.rm_bottom_1["geometry"]}
          material={materials.cabBottom_mtl_1001}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.lm_bottom_1["geometry"]}
          material={materials.cabBottom_mtl_1001}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.l_bottom_1["geometry"]}
          material={materials.cabBottom_mtl_1001}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.r_cabDoor_1["geometry"]}
          material={materials.cabDoor_mtl_1001}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.rm_cabDoor_1["geometry"]}
          material={materials.cabDoor_mtl_1001}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.lm_cabDoor_1["geometry"]}
          material={materials.cabDoor_mtl_1001}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.l_cabDoor_1["geometry"]}
          material={materials.cabDoor_mtl_1001}
        />
      </group>
    </group>
  );
}
