import { Detailed, useGLTF } from "@react-three/drei";
import { useConfig } from "@store";
import extend from "just-extend";
import { useControls } from "leva";
import { ShadowedMesh } from "./Environment";

const config = {
  "model": "fridge.glb",
  "512": "/fridge/512",
  "1k": "/fridge/1k",
  "2k": "/fridge/2k",
  "LOD512": "512",
  "LOD1k": "1k",
  "LOD2k": "2k"
};
const configs = {
  LOD512: config.LOD512,
  LOD1k: config.LOD1k,
  LOD2k: config.LOD2k
};

export function Fridge(props) {
  const fridge = useConfig(e => e.Fridge);
  const { nodes: nodesLOD512, materials: materials512 } = useGLTF(
    `${config[configs.LOD512]}/${config.model}`
  );
  const { nodes: nodesLOD1k, materials: materials1k } = useGLTF(
    `${config[configs.LOD1k]}/${config.model}`
  );
  const { nodes: nodesLOD2k, materials: materials2k } = useGLTF(
    `${config[configs.LOD2k]}/${config.model}`
  );
  const fridgeProps = useControls("Fridge", extend(true, fridge, {}), {
    collapsed: true
  });
  return (
    <group
      {...props}
      position={[0.02, 0, 0]}
      visible={fridgeProps["fridge"]}
      scale={0.01}
      dispose={null}>
      <Detailed distances={[0, 2, 3]}>
        <ShadowedMesh
          geometry={nodesLOD2k.fridgeBox_1["geometry"]}
          material={materials2k.fridgeBox_mtl_1001}
        />
        <ShadowedMesh
          geometry={nodesLOD1k.fridgeBox_1["geometry"]}
          material={materials1k.fridgeBox_mtl_1001}
        />
        <ShadowedMesh
          geometry={nodesLOD512.fridgeBox_1["geometry"]}
          material={materials512.fridgeBox_mtl_1001}
        />
      </Detailed>

      <Detailed distances={[0, 2, 3]}>
        <ShadowedMesh
          geometry={nodesLOD2k.upperDoor_1["geometry"]}
          material={materials2k.fridgeDoors_mtl_1001}
        />
        <ShadowedMesh
          geometry={nodesLOD1k.upperDoor_1["geometry"]}
          material={materials1k.fridgeDoors_mtl_1001}
        />
        <ShadowedMesh
          geometry={nodesLOD512.upperDoor_1["geometry"]}
          material={materials512.fridgeDoors_mtl_1001}
        />
      </Detailed>

      <Detailed distances={[0, 2, 3]}>
        <ShadowedMesh
          geometry={nodesLOD2k.lowerDoor_1["geometry"]}
          material={materials2k.fridgeDoors_mtl_1001}
        />
        <ShadowedMesh
          geometry={nodesLOD1k.lowerDoor_1["geometry"]}
          material={materials1k.fridgeDoors_mtl_1001}
        />
        <ShadowedMesh
          geometry={nodesLOD512.lowerDoor_1["geometry"]}
          material={materials512.fridgeDoors_mtl_1001}
        />
      </Detailed>

      <Detailed distances={[0, 2, 3]}>
        <ShadowedMesh
          geometry={nodesLOD2k.rUpperHandle_1["geometry"]}
          material={materials2k.handle_mtl_1001}
        />
        <ShadowedMesh
          geometry={nodesLOD1k.rUpperHandle_1["geometry"]}
          material={materials1k.handle_mtl_1001}
        />
        <ShadowedMesh
          geometry={nodesLOD512.rUpperHandle_1["geometry"]}
          material={materials512.handle_mtl_1001}
        />
      </Detailed>

      <Detailed distances={[0, 2, 3]}>
        <ShadowedMesh
          geometry={nodesLOD2k.lUpperHandle_1["geometry"]}
          material={materials2k.handle_mtl_1001}
        />
        <ShadowedMesh
          geometry={nodesLOD1k.lUpperHandle_1["geometry"]}
          material={materials1k.handle_mtl_1001}
        />
        <ShadowedMesh
          geometry={nodesLOD512.lUpperHandle_1["geometry"]}
          material={materials512.handle_mtl_1001}
        />
      </Detailed>

      <Detailed distances={[0, 2, 3]}>
        <ShadowedMesh
          geometry={nodesLOD2k.rLowerHandle_1["geometry"]}
          material={materials2k.handle_mtl_1001}
        />
        <ShadowedMesh
          geometry={nodesLOD1k.rLowerHandle_1["geometry"]}
          material={materials1k.handle_mtl_1001}
        />
        <ShadowedMesh
          geometry={nodesLOD512.rLowerHandle_1["geometry"]}
          material={materials512.handle_mtl_1001}
        />
      </Detailed>

      <Detailed distances={[0, 2, 3]}>
        <ShadowedMesh
          geometry={nodesLOD2k.lLowerHandle_1["geometry"]}
          material={materials2k.handle_mtl_1001}
        />
        <ShadowedMesh
          geometry={nodesLOD1k.lLowerHandle_1["geometry"]}
          material={materials1k.handle_mtl_1001}
        />
        <ShadowedMesh
          geometry={nodesLOD512.lLowerHandle_1["geometry"]}
          material={materials512.handle_mtl_1001}
        />
      </Detailed>
    </group>
  );
}
