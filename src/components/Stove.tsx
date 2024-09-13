import { Detailed, useGLTF } from "@react-three/drei";
import { useConfig } from "@store";
import extend from "just-extend";
import { useControls } from "leva";
import { ShadowedMesh } from "./Environment";

const config = {
  "model": "stove.glb",
  "512": "/stove/512",
  "1k": "/stove/1k",
  "2k": "/stove/2k",
  "LOD512": "512",
  "LOD1k": "1k",
  "LOD2k": "2k"
};
const configs = {
  LOD512: config.LOD512,
  LOD1k: config.LOD1k,
  LOD2k: config.LOD2k
};

export function Stove(props) {
  const stove = useConfig(e => e.Stove);
  const { nodes: nodesLOD512, materials: materials512 } = useGLTF(
    `${config[configs.LOD512]}/${config.model}`
  );
  const { nodes: nodesLOD1k, materials: materials1k } = useGLTF(
    `${config[configs.LOD1k]}/${config.model}`
  );
  const { nodes: nodesLOD2k, materials: materials2k } = useGLTF(
    `${config[configs.LOD2k]}/${config.model}`
  );
  const stoveProps = useControls("Stove", extend(true, stove, {}), {
    collapsed: true
  });
  return (
    <group
      {...props}
      position={[0, 0, 0]}
      visible={stoveProps["stove"]}
      scale={0.01}
      dispose={null}>
      <Detailed distances={[0, 2, 3]}>
        <ShadowedMesh
          geometry={nodesLOD2k.stoveBase_1["geometry"]}
          material={materials2k.stoveBase_mtl_1001}
        />
        <ShadowedMesh
          geometry={nodesLOD1k.stoveBase_1["geometry"]}
          material={materials1k.stoveBase_mtl_1001}
        />
        <ShadowedMesh
          geometry={nodesLOD512.stoveBase_1["geometry"]}
          material={materials512.stoveBase_mtl_1001}
        />
      </Detailed>
      <Detailed distances={[0, 2, 3]}>
        <ShadowedMesh
          geometry={nodesLOD2k.handles_1["geometry"]}
          material={materials2k.sectionMetals_mtl_1001}
        />
        <ShadowedMesh
          geometry={nodesLOD1k.handles_1["geometry"]}
          material={materials1k.sectionMetals_mtl_1001}
        />
        <ShadowedMesh
          geometry={nodesLOD512.handles_1["geometry"]}
          material={materials512.sectionMetals_mtl_1001}
        />
      </Detailed>
      <Detailed distances={[0, 2, 3]}>
        <ShadowedMesh
          geometry={nodesLOD2k.stoveDrawer_1["geometry"]}
          material={materials2k.sectionMetals_mtl_1001}
        />
        <ShadowedMesh
          geometry={nodesLOD1k.stoveDrawer_1["geometry"]}
          material={materials1k.sectionMetals_mtl_1001}
        />
        <ShadowedMesh
          geometry={nodesLOD512.stoveDrawer_1["geometry"]}
          material={materials512.sectionMetals_mtl_1001}
        />
      </Detailed>
      <Detailed distances={[0, 2, 3]}>
        <ShadowedMesh
          geometry={nodesLOD2k.feet_1["geometry"]}
          material={materials2k.grateMetals_mtl_1001}
        />
        <ShadowedMesh
          geometry={nodesLOD1k.feet_1["geometry"]}
          material={materials1k.grateMetals_mtl_1001}
        />
        <ShadowedMesh
          geometry={nodesLOD512.feet_1["geometry"]}
          material={materials512.grateMetals_mtl_1001}
        />
      </Detailed>
      <Detailed distances={[0, 2, 3]}>
        <ShadowedMesh
          geometry={nodesLOD2k.stoveTop_1["geometry"]}
          material={materials2k.stoveTop_mtl_1001}
        />
        <ShadowedMesh
          geometry={nodesLOD1k.stoveTop_1["geometry"]}
          material={materials1k.stoveTop_mtl_1001}
        />
        <ShadowedMesh
          geometry={nodesLOD512.stoveTop_1["geometry"]}
          material={materials512.stoveTop_mtl_1001}
        />
      </Detailed>
      <Detailed distances={[0, 2, 3]}>
        <ShadowedMesh
          geometry={nodesLOD2k.burnerGrates_1["geometry"]}
          material={materials2k.grateMetals_mtl_1001}
        />
        <ShadowedMesh
          geometry={nodesLOD1k.burnerGrates_1["geometry"]}
          material={materials1k.grateMetals_mtl_1001}
        />
        <ShadowedMesh
          geometry={nodesLOD512.burnerGrates_1["geometry"]}
          material={materials512.grateMetals_mtl_1001}
        />
      </Detailed>
      <Detailed distances={[0, 2, 3]}>
        <ShadowedMesh
          geometry={nodesLOD2k.stovePanel_1["geometry"]}
          material={materials2k.sectionMetals_mtl_1001}
        />
        <ShadowedMesh
          geometry={nodesLOD1k.stovePanel_1["geometry"]}
          material={materials1k.sectionMetals_mtl_1001}
        />
        <ShadowedMesh
          geometry={nodesLOD512.stovePanel_1["geometry"]}
          material={materials512.sectionMetals_mtl_1001}
        />
      </Detailed>
      <Detailed distances={[0, 2, 3]}>
        <ShadowedMesh
          geometry={nodesLOD2k.knobs_1["geometry"]}
          material={materials2k.knobs_mtl_1001}
        />
        <ShadowedMesh
          geometry={nodesLOD1k.knobs_1["geometry"]}
          material={materials1k.knobs_mtl_1001}
        />
        <ShadowedMesh
          geometry={nodesLOD512.knobs_1["geometry"]}
          material={materials512.knobs_mtl_1001}
        />
      </Detailed>
      <Detailed distances={[0, 2, 3]}>
        <ShadowedMesh
          geometry={nodesLOD2k.button_1["geometry"]}
          material={materials2k.knobs_mtl_1001}
        />
        <ShadowedMesh
          geometry={nodesLOD1k.button_1["geometry"]}
          material={materials1k.knobs_mtl_1001}
        />
        <ShadowedMesh
          geometry={nodesLOD512.button_1["geometry"]}
          material={materials512.knobs_mtl_1001}
        />
      </Detailed>
      <Detailed distances={[0, 2, 3]}>
        <ShadowedMesh
          geometry={nodesLOD2k.doorGlass_1["geometry"]}
          material={materials2k.doorGlass_mtl_1001}
        />
        <ShadowedMesh
          geometry={nodesLOD1k.doorGlass_1["geometry"]}
          material={materials1k.doorGlass_mtl_1001}
        />
        <ShadowedMesh
          geometry={nodesLOD512.doorGlass_1["geometry"]}
          material={materials512.doorGlass_mtl_1001}
        />
      </Detailed>
      <Detailed distances={[0, 2, 3]}>
        <ShadowedMesh
          geometry={nodesLOD2k.stoveDoor_1["geometry"]}
          material={materials2k.stoveDoor_mtl_1001}
        />
        <ShadowedMesh
          geometry={nodesLOD1k.stoveDoor_1["geometry"]}
          material={materials1k.stoveDoor_mtl_1001}
        />
        <ShadowedMesh
          geometry={nodesLOD512.stoveDoor_1["geometry"]}
          material={materials512.stoveDoor_mtl_1001}
        />
      </Detailed>
      <Detailed distances={[0, 2, 3]}>
        <ShadowedMesh
          geometry={nodesLOD2k.innerDoor_1["geometry"]}
          material={materials2k.doorGlass_mtl_1001}
        />
        <ShadowedMesh
          geometry={nodesLOD1k.innerDoor_1["geometry"]}
          material={materials1k.doorGlass_mtl_1001}
        />
        <ShadowedMesh
          geometry={nodesLOD512.innerDoor_1["geometry"]}
          material={materials512.doorGlass_mtl_1001}
        />
      </Detailed>
    </group>
  );
}
