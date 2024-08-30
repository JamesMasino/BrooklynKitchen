import { Detailed, useGLTF } from "@react-three/drei";
import { useConfig } from "@store";
import extend from "just-extend";
import { useControls } from "leva";
import { ShadowedMesh } from "./Environment";

const config = {
  "model": "kitchenRoom.glb",
  "512": "/kitchenRoom/512",
  "1k": "/kitchenRoom/1k",
  "LOD512": "512",
  "LOD1k": "1k"
};
const configs = {
  LOD512: config.LOD512,
  LOD1k: config.LOD1k
};

export function KitchenRoom(props) {
  const kitchenRoom = useConfig(e => e.KitchenRoom);
  const { nodes: nodesLOD512, materials: materials512 } = useGLTF(
    `${config[configs.LOD512]}/${config.model}`
  );
  const { nodes: nodesLOD1k, materials: materials1k } = useGLTF(
    `${config[configs.LOD1k]}/${config.model}`
  );
  const kitchenRoomProps = useControls(
    "Kitchen Room",
    extend(true, kitchenRoom, {}),
    { collapsed: true }
  );
  return (
    <group
      {...{ ...props, ...kitchenRoomProps }}
      position={[0, 0, 0]}
      visible={kitchenRoomProps["KitchenRoom"]}
      scale={0.01}
      dispose={null}>
      <Detailed distances={[0, 2]}>
        <ShadowedMesh
          geometry={nodesLOD1k.wallCorner_1["geometry"]}
          material={materials1k.windowTile_mtl_1001}
        />
        <ShadowedMesh
          geometry={nodesLOD512.wallCorner_1["geometry"]}
          material={materials512.windowTile_mtl_1001}
        />
      </Detailed>
      <Detailed distances={[0, 2]}>
        <ShadowedMesh
          geometry={nodesLOD1k.windowTileBack_1["geometry"]}
          material={materials1k.windowTile_mtl_1001}
        />
        <ShadowedMesh
          geometry={nodesLOD512.windowTileBack_1["geometry"]}
          material={materials512.windowTile_mtl_1001}
        />
      </Detailed>
      <Detailed distances={[0, 2]}>
        <ShadowedMesh
          geometry={nodesLOD1k.squareTile32_1["geometry"]}
          material={materials1k.windowTile_mtl_1001}
          position={[0, 124.6, 0]}
        />
        <ShadowedMesh
          geometry={nodesLOD512.squareTile32_1["geometry"]}
          material={materials512.windowTile_mtl_1001}
          position={[0, 124.6, 0]}
        />
      </Detailed>
      <Detailed distances={[0, 2]}>
        <ShadowedMesh
          geometry={nodesLOD1k.squareTile31_1["geometry"]}
          material={materials1k.windowTile_mtl_1001}
          position={[0, 124.6, 0]}
        />
        <ShadowedMesh
          geometry={nodesLOD512.squareTile31_1["geometry"]}
          material={materials512.windowTile_mtl_1001}
          position={[0, 124.6, 0]}
        />
      </Detailed>
      <Detailed distances={[0, 2]}>
        <ShadowedMesh
          geometry={nodesLOD1k.squareTile30_1["geometry"]}
          material={materials1k.windowTile_mtl_1001}
          position={[0, 124.6, 0]}
        />
        <ShadowedMesh
          geometry={nodesLOD512.squareTile30_1["geometry"]}
          material={materials512.windowTile_mtl_1001}
          position={[0, 124.6, 0]}
        />
      </Detailed>
      <Detailed distances={[0, 2]}>
        <ShadowedMesh
          geometry={nodesLOD1k.squareTile29_1["geometry"]}
          material={materials1k.windowTile_mtl_1001}
          position={[0, 124.6, 0]}
        />
        <ShadowedMesh
          geometry={nodesLOD512.squareTile29_1["geometry"]}
          material={materials512.windowTile_mtl_1001}
          position={[0, 124.6, 0]}
        />
      </Detailed>
      <Detailed distances={[0, 2]}>
        <ShadowedMesh
          geometry={nodesLOD1k.squareTile28_1["geometry"]}
          material={materials1k.windowTile_mtl_1001}
          position={[0, 106.8, 0]}
        />
        <ShadowedMesh
          geometry={nodesLOD512.squareTile28_1["geometry"]}
          material={materials512.windowTile_mtl_1001}
          position={[0, 106.8, 0]}
        />
      </Detailed>
      <Detailed distances={[0, 2]}>
        <ShadowedMesh
          geometry={nodesLOD1k.squareTile27_1["geometry"]}
          material={materials1k.windowTile_mtl_1001}
          position={[0, 106.8, 0]}
        />
        <ShadowedMesh
          geometry={nodesLOD512.squareTile27_1["geometry"]}
          material={materials512.windowTile_mtl_1001}
          position={[0, 106.8, 0]}
        />
      </Detailed>
      <Detailed distances={[0, 2]}>
        <ShadowedMesh
          geometry={nodesLOD1k.squareTile26_1["geometry"]}
          material={materials1k.windowTile_mtl_1001}
          position={[0, 106.8, 0]}
        />
        <ShadowedMesh
          geometry={nodesLOD512.squareTile26_1["geometry"]}
          material={materials512.windowTile_mtl_1001}
          position={[0, 106.8, 0]}
        />
      </Detailed>
      <Detailed distances={[0, 2]}>
        <ShadowedMesh
          geometry={nodesLOD1k.squareTile25_1["geometry"]}
          material={materials1k.windowTile_mtl_1001}
          position={[0, 106.8, 0]}
        />
        <ShadowedMesh
          geometry={nodesLOD512.squareTile25_1["geometry"]}
          material={materials512.windowTile_mtl_1001}
          position={[0, 106.8, 0]}
        />
      </Detailed>
      <Detailed distances={[0, 2]}>
        <ShadowedMesh
          geometry={nodesLOD1k.squareTile24_1["geometry"]}
          material={materials1k.windowTile_mtl_1001}
          position={[0, 89, 0]}
        />
        <ShadowedMesh
          geometry={nodesLOD512.squareTile24_1["geometry"]}
          material={materials512.windowTile_mtl_1001}
          position={[0, 89, 0]}
        />
      </Detailed>
      <Detailed distances={[0, 2]}>
        <ShadowedMesh
          geometry={nodesLOD1k.squareTile23_1["geometry"]}
          material={materials1k.windowTile_mtl_1001}
          position={[0, 89, 0]}
        />
        <ShadowedMesh
          geometry={nodesLOD512.squareTile23_1["geometry"]}
          material={materials512.windowTile_mtl_1001}
          position={[0, 89, 0]}
        />
      </Detailed>
      <Detailed distances={[0, 2]}>
        <ShadowedMesh
          geometry={nodesLOD1k.squareTile22_1["geometry"]}
          material={materials1k.windowTile_mtl_1001}
          position={[0, 89, 0]}
        />
        <ShadowedMesh
          geometry={nodesLOD512.squareTile22_1["geometry"]}
          material={materials512.windowTile_mtl_1001}
          position={[0, 89, 0]}
        />
      </Detailed>
      <Detailed distances={[0, 2]}>
        <ShadowedMesh
          geometry={nodesLOD1k.squareTile21_1["geometry"]}
          material={materials1k.windowTile_mtl_1001}
          position={[0, 89, 0]}
        />
        <ShadowedMesh
          geometry={nodesLOD512.squareTile21_1["geometry"]}
          material={materials512.windowTile_mtl_1001}
          position={[0, 89, 0]}
        />
      </Detailed>
      <Detailed distances={[0, 2]}>
        <ShadowedMesh
          geometry={nodesLOD1k.squareTile20_1["geometry"]}
          material={materials1k.windowTile_mtl_1001}
          position={[0, 71.2, 0]}
        />
        <ShadowedMesh
          geometry={nodesLOD512.squareTile20_1["geometry"]}
          material={materials512.windowTile_mtl_1001}
          position={[0, 71.2, 0]}
        />
      </Detailed>
      <Detailed distances={[0, 2]}>
        <ShadowedMesh
          geometry={nodesLOD1k.squareTile19_1["geometry"]}
          material={materials1k.windowTile_mtl_1001}
          position={[0, 71.2, 0]}
        />
        <ShadowedMesh
          geometry={nodesLOD512.squareTile19_1["geometry"]}
          material={materials512.windowTile_mtl_1001}
          position={[0, 71.2, 0]}
        />
      </Detailed>
      <Detailed distances={[0, 2]}>
        <ShadowedMesh
          geometry={nodesLOD1k.squareTile18_1["geometry"]}
          material={materials1k.windowTile_mtl_1001}
          position={[0, 71.2, 0]}
        />
        <ShadowedMesh
          geometry={nodesLOD512.squareTile18_1["geometry"]}
          material={materials512.windowTile_mtl_1001}
          position={[0, 71.2, 0]}
        />
      </Detailed>
      <Detailed distances={[0, 2]}>
        <ShadowedMesh
          geometry={nodesLOD1k.squareTile17_1["geometry"]}
          material={materials1k.windowTile_mtl_1001}
          position={[0, 71.2, 0]}
        />
        <ShadowedMesh
          geometry={nodesLOD512.squareTile17_1["geometry"]}
          material={materials512.windowTile_mtl_1001}
          position={[0, 71.2, 0]}
        />
      </Detailed>
      <Detailed distances={[0, 2]}>
        <ShadowedMesh
          geometry={nodesLOD1k.squareTile16_1["geometry"]}
          material={materials1k.windowTile_mtl_1001}
          position={[0, 53.4, 0]}
        />
        <ShadowedMesh
          geometry={nodesLOD512.squareTile16_1["geometry"]}
          material={materials512.windowTile_mtl_1001}
          position={[0, 53.4, 0]}
        />
      </Detailed>
      <Detailed distances={[0, 2]}>
        <ShadowedMesh
          geometry={nodesLOD1k.squareTile15_1["geometry"]}
          material={materials1k.windowTile_mtl_1001}
          position={[0, 53.4, 0]}
        />
        <ShadowedMesh
          geometry={nodesLOD512.squareTile15_1["geometry"]}
          material={materials512.windowTile_mtl_1001}
          position={[0, 53.4, 0]}
        />
      </Detailed>
      <Detailed distances={[0, 2]}>
        <ShadowedMesh
          geometry={nodesLOD1k.squareTile14_1["geometry"]}
          material={materials1k.windowTile_mtl_1001}
          position={[0, 53.4, 0]}
        />
        <ShadowedMesh
          geometry={nodesLOD512.squareTile14_1["geometry"]}
          material={materials512.windowTile_mtl_1001}
          position={[0, 53.4, 0]}
        />
      </Detailed>
      <Detailed distances={[0, 2]}>
        <ShadowedMesh
          geometry={nodesLOD1k.squareTile13_1["geometry"]}
          material={materials1k.windowTile_mtl_1001}
          position={[0, 53.4, 0]}
        />
        <ShadowedMesh
          geometry={nodesLOD512.squareTile13_1["geometry"]}
          material={materials512.windowTile_mtl_1001}
          position={[0, 53.4, 0]}
        />
      </Detailed>
      <Detailed distances={[0, 2]}>
        <ShadowedMesh
          geometry={nodesLOD1k.squareTile12_1["geometry"]}
          material={materials1k.windowTile_mtl_1001}
          position={[0, 35.6, 0]}
        />
        <ShadowedMesh
          geometry={nodesLOD512.squareTile12_1["geometry"]}
          material={materials512.windowTile_mtl_1001}
          position={[0, 35.6, 0]}
        />
      </Detailed>
      <Detailed distances={[0, 2]}>
        <ShadowedMesh
          geometry={nodesLOD1k.squareTile11_1["geometry"]}
          material={materials1k.windowTile_mtl_1001}
          position={[0, 35.6, 0]}
        />
        <ShadowedMesh
          geometry={nodesLOD512.squareTile11_1["geometry"]}
          material={materials512.windowTile_mtl_1001}
          position={[0, 35.6, 0]}
        />
      </Detailed>
      <Detailed distances={[0, 2]}>
        <ShadowedMesh
          geometry={nodesLOD1k.squareTile10_1["geometry"]}
          material={materials1k.windowTile_mtl_1001}
          position={[0, 35.6, 0]}
        />
        <ShadowedMesh
          geometry={nodesLOD512.squareTile10_1["geometry"]}
          material={materials512.windowTile_mtl_1001}
          position={[0, 35.6, 0]}
        />
      </Detailed>
      <Detailed distances={[0, 2]}>
        <ShadowedMesh
          geometry={nodesLOD1k.squareTile09_1["geometry"]}
          material={materials1k.windowTile_mtl_1001}
          position={[0, 35.6, 0]}
        />
        <ShadowedMesh
          geometry={nodesLOD512.squareTile09_1["geometry"]}
          material={materials512.windowTile_mtl_1001}
          position={[0, 35.6, 0]}
        />
      </Detailed>
      <Detailed distances={[0, 2]}>
        <ShadowedMesh
          geometry={nodesLOD1k.squareTile08_1["geometry"]}
          material={materials1k.windowTile_mtl_1001}
          position={[0, 17.8, 0]}
        />
        <ShadowedMesh
          geometry={nodesLOD512.squareTile08_1["geometry"]}
          material={materials512.windowTile_mtl_1001}
          position={[0, 17.8, 0]}
        />
      </Detailed>
      <Detailed distances={[0, 2]}>
        <ShadowedMesh
          geometry={nodesLOD1k.squareTile07_1["geometry"]}
          material={materials1k.windowTile_mtl_1001}
          position={[0, 17.8, 0]}
        />
        <ShadowedMesh
          geometry={nodesLOD512.squareTile07_1["geometry"]}
          material={materials512.windowTile_mtl_1001}
          position={[0, 17.8, 0]}
        />
      </Detailed>
      <Detailed distances={[0, 2]}>
        <ShadowedMesh
          geometry={nodesLOD1k.squareTile06_1["geometry"]}
          material={materials1k.windowTile_mtl_1001}
          position={[0, 17.8, 0]}
        />
        <ShadowedMesh
          geometry={nodesLOD512.squareTile06_1["geometry"]}
          material={materials512.windowTile_mtl_1001}
          position={[0, 17.8, 0]}
        />
      </Detailed>
      <Detailed distances={[0, 2]}>
        <ShadowedMesh
          geometry={nodesLOD1k.squareTile05_1["geometry"]}
          material={materials1k.windowTile_mtl_1001}
          position={[0, 17.8, 0]}
        />
        <ShadowedMesh
          geometry={nodesLOD512.squareTile05_1["geometry"]}
          material={materials512.windowTile_mtl_1001}
          position={[0, 17.8, 0]}
        />
      </Detailed>
      <Detailed distances={[0, 2]}>
        <ShadowedMesh
          geometry={nodesLOD1k.squareTile04_1["geometry"]}
          material={materials1k.windowTile_mtl_1001}
        />
        <ShadowedMesh
          geometry={nodesLOD512.squareTile04_1["geometry"]}
          material={materials512.windowTile_mtl_1001}
        />
      </Detailed>
      <Detailed distances={[0, 2]}>
        <ShadowedMesh
          geometry={nodesLOD1k.squareTile03_1["geometry"]}
          material={materials1k.windowTile_mtl_1001}
        />
        <ShadowedMesh
          geometry={nodesLOD512.squareTile03_1["geometry"]}
          material={materials512.windowTile_mtl_1001}
        />
      </Detailed>
      <Detailed distances={[0, 2]}>
        <ShadowedMesh
          geometry={nodesLOD1k.squareTile02_1["geometry"]}
          material={materials1k.windowTile_mtl_1001}
        />
        <ShadowedMesh
          geometry={nodesLOD512.squareTile02_1["geometry"]}
          material={materials512.windowTile_mtl_1001}
        />
      </Detailed>
      <Detailed distances={[0, 2]}>
        <ShadowedMesh
          geometry={nodesLOD1k.squareTile01_1["geometry"]}
          material={materials1k.windowTile_mtl_1001}
        />
        <ShadowedMesh
          geometry={nodesLOD512.squareTile01_1["geometry"]}
          material={materials512.windowTile_mtl_1001}
        />
      </Detailed>
      <Detailed distances={[0, 2]}>
        <ShadowedMesh
          geometry={nodesLOD1k.wallTileBack_1["geometry"]}
          material={materials1k.wallTile_mtl_1001}
        />
        <ShadowedMesh
          geometry={nodesLOD512.wallTileBack_1["geometry"]}
          material={materials512.wallTile_mtl_1001}
        />
      </Detailed>
      <Detailed distances={[0, 2]}>
        <ShadowedMesh
          geometry={nodesLOD1k.rectangleTile01_1["geometry"]}
          material={materials1k.wallTile_mtl_1001}
        />
        <ShadowedMesh
          geometry={nodesLOD512.rectangleTile01_1["geometry"]}
          material={materials512.wallTile_mtl_1001}
        />
      </Detailed>
      <Detailed distances={[0, 2]}>
        <ShadowedMesh
          geometry={nodesLOD1k.rectangleTile02_1["geometry"]}
          material={materials1k.wallTile_mtl_1001}
        />
        <ShadowedMesh
          geometry={nodesLOD512.rectangleTile02_1["geometry"]}
          material={materials512.wallTile_mtl_1001}
        />
      </Detailed>
      <Detailed distances={[0, 2]}>
        <ShadowedMesh
          geometry={nodesLOD1k.rectangleTile03_1["geometry"]}
          material={materials1k.wallTile_mtl_1001}
        />
        <ShadowedMesh
          geometry={nodesLOD512.rectangleTile03_1["geometry"]}
          material={materials512.wallTile_mtl_1001}
        />
      </Detailed>
      <Detailed distances={[0, 2]}>
        <ShadowedMesh
          geometry={nodesLOD1k.rectangleTile04_1["geometry"]}
          material={materials1k.wallTile_mtl_1001}
        />
        <ShadowedMesh
          geometry={nodesLOD512.rectangleTile04_1["geometry"]}
          material={materials512.wallTile_mtl_1001}
        />
      </Detailed>
      <Detailed distances={[0, 2]}>
        <ShadowedMesh
          geometry={nodesLOD1k.rectangleTile05_1["geometry"]}
          material={materials1k.wallTile_mtl_1001}
        />
        <ShadowedMesh
          geometry={nodesLOD512.rectangleTile05_1["geometry"]}
          material={materials512.wallTile_mtl_1001}
        />
      </Detailed>
      <Detailed distances={[0, 2]}>
        <ShadowedMesh
          geometry={nodesLOD1k.rectangleTile06_1["geometry"]}
          material={materials1k.wallTile_mtl_1001}
        />
        <ShadowedMesh
          geometry={nodesLOD512.rectangleTile06_1["geometry"]}
          material={materials512.wallTile_mtl_1001}
        />
      </Detailed>
      <Detailed distances={[0, 2]}>
        <ShadowedMesh
          geometry={nodesLOD1k.rectangleTile07_1["geometry"]}
          material={materials1k.wallTile_mtl_1001}
        />
        <ShadowedMesh
          geometry={nodesLOD512.rectangleTile07_1["geometry"]}
          material={materials512.wallTile_mtl_1001}
        />
      </Detailed>
      <Detailed distances={[0, 2]}>
        <ShadowedMesh
          geometry={nodesLOD1k.rectangleTile08_1["geometry"]}
          material={materials1k.wallTile_mtl_1001}
        />
        <ShadowedMesh
          geometry={nodesLOD512.rectangleTile08_1["geometry"]}
          material={materials512.wallTile_mtl_1001}
        />
      </Detailed>
      <Detailed distances={[0, 2]}>
        <ShadowedMesh
          geometry={nodesLOD1k.rectangleTile09_1["geometry"]}
          material={materials1k.wallTile_mtl_1001}
        />
        <ShadowedMesh
          geometry={nodesLOD512.rectangleTile09_1["geometry"]}
          material={materials512.wallTile_mtl_1001}
        />
      </Detailed>
      <Detailed distances={[0, 2]}>
        <ShadowedMesh
          geometry={nodesLOD1k.rectangleTile10_1["geometry"]}
          material={materials1k.wallTile_mtl_1001}
        />
        <ShadowedMesh
          geometry={nodesLOD512.rectangleTile10_1["geometry"]}
          material={materials512.wallTile_mtl_1001}
        />
      </Detailed>
      <Detailed distances={[0, 2]}>
        <ShadowedMesh
          geometry={nodesLOD1k.rectangleTile11_1["geometry"]}
          material={materials1k.wallTile_mtl_1001}
        />
        <ShadowedMesh
          geometry={nodesLOD512.rectangleTile11_1["geometry"]}
          material={materials512.wallTile_mtl_1001}
        />
      </Detailed>
      <Detailed distances={[0, 2]}>
        <ShadowedMesh
          geometry={nodesLOD1k.rectangleTile12_1["geometry"]}
          material={materials1k.wallTile_mtl_1001}
        />
        <ShadowedMesh
          geometry={nodesLOD512.rectangleTile12_1["geometry"]}
          material={materials512.wallTile_mtl_1001}
        />
      </Detailed>
      <Detailed distances={[0, 2]}>
        <ShadowedMesh
          geometry={nodesLOD1k.rectangleTile13_1["geometry"]}
          material={materials1k.wallTile_mtl_1001}
        />
        <ShadowedMesh
          geometry={nodesLOD512.rectangleTile13_1["geometry"]}
          material={materials512.wallTile_mtl_1001}
        />
      </Detailed>
      <Detailed distances={[0, 2]}>
        <ShadowedMesh
          geometry={nodesLOD1k.rectangleTile14_1["geometry"]}
          material={materials1k.wallTile_mtl_1001}
        />
        <ShadowedMesh
          geometry={nodesLOD512.rectangleTile14_1["geometry"]}
          material={materials512.wallTile_mtl_1001}
        />
      </Detailed>
      <Detailed distances={[0, 2]}>
        <ShadowedMesh
          geometry={nodesLOD1k.rectangleTile15_1["geometry"]}
          material={materials1k.wallTile_mtl_1001}
        />
        <ShadowedMesh
          geometry={nodesLOD512.rectangleTile15_1["geometry"]}
          material={materials512.wallTile_mtl_1001}
        />
      </Detailed>
      <Detailed distances={[0, 2]}>
        <ShadowedMesh
          geometry={nodesLOD1k.rectangleTile16_1["geometry"]}
          material={materials1k.wallTile_mtl_1001}
        />
        <ShadowedMesh
          geometry={nodesLOD512.rectangleTile16_1["geometry"]}
          material={materials512.wallTile_mtl_1001}
        />
      </Detailed>
      <Detailed distances={[0, 2]}>
        <ShadowedMesh
          geometry={nodesLOD1k.rectangleTile17_1["geometry"]}
          material={materials1k.wallTile_mtl_1001}
        />
        <ShadowedMesh
          geometry={nodesLOD512.rectangleTile17_1["geometry"]}
          material={materials512.wallTile_mtl_1001}
        />
      </Detailed>
      <Detailed distances={[0, 2]}>
        <ShadowedMesh
          geometry={nodesLOD1k.rectangleTile18_1["geometry"]}
          material={materials1k.wallTile_mtl_1001}
        />
        <ShadowedMesh
          geometry={nodesLOD512.rectangleTile18_1["geometry"]}
          material={materials512.wallTile_mtl_1001}
        />
      </Detailed>
      <Detailed distances={[0, 2]}>
        <ShadowedMesh
          geometry={nodesLOD1k.rectangleTile19_1["geometry"]}
          material={materials1k.wallTile_mtl_1001}
        />
        <ShadowedMesh
          geometry={nodesLOD512.rectangleTile19_1["geometry"]}
          material={materials512.wallTile_mtl_1001}
        />
      </Detailed>
      <Detailed distances={[0, 2]}>
        <ShadowedMesh
          geometry={nodesLOD1k.rectangleTile20_1["geometry"]}
          material={materials1k.wallTile_mtl_1001}
        />
        <ShadowedMesh
          geometry={nodesLOD512.rectangleTile20_1["geometry"]}
          material={materials512.wallTile_mtl_1001}
        />
      </Detailed>
      <Detailed distances={[0, 2]}>
        <ShadowedMesh
          geometry={nodesLOD1k.rectangleTile21_1["geometry"]}
          material={materials1k.wallTile_mtl_1001}
        />
        <ShadowedMesh
          geometry={nodesLOD512.rectangleTile21_1["geometry"]}
          material={materials512.wallTile_mtl_1001}
        />
      </Detailed>
      <Detailed distances={[0, 2]}>
        <ShadowedMesh
          geometry={nodesLOD1k.rectangleTile22_1["geometry"]}
          material={materials1k.wallTile_mtl_1001}
        />
        <ShadowedMesh
          geometry={nodesLOD512.rectangleTile22_1["geometry"]}
          material={materials512.wallTile_mtl_1001}
        />
      </Detailed>
      <Detailed distances={[0, 2]}>
        <ShadowedMesh
          geometry={nodesLOD1k.rectangleTile23_1["geometry"]}
          material={materials1k.wallTile_mtl_1001}
        />
        <ShadowedMesh
          geometry={nodesLOD512.rectangleTile23_1["geometry"]}
          material={materials512.wallTile_mtl_1001}
        />
      </Detailed>
      <Detailed distances={[0, 2]}>
        <ShadowedMesh
          geometry={nodesLOD1k.rectangleTile24_1["geometry"]}
          material={materials1k.wallTile_mtl_1001}
        />
        <ShadowedMesh
          geometry={nodesLOD512.rectangleTile24_1["geometry"]}
          material={materials512.wallTile_mtl_1001}
        />
      </Detailed>
      <Detailed distances={[0, 2]}>
        <ShadowedMesh
          geometry={nodesLOD1k.rectangleTile25_1["geometry"]}
          material={materials1k.wallTile_mtl_1001}
        />
        <ShadowedMesh
          geometry={nodesLOD512.rectangleTile25_1["geometry"]}
          material={materials512.wallTile_mtl_1001}
        />
      </Detailed>
      <Detailed distances={[0, 2]}>
        <ShadowedMesh
          geometry={nodesLOD1k.rectangleTile26_1["geometry"]}
          material={materials1k.wallTile_mtl_1001}
        />
        <ShadowedMesh
          geometry={nodesLOD512.rectangleTile26_1["geometry"]}
          material={materials512.wallTile_mtl_1001}
        />
      </Detailed>
      <Detailed distances={[0, 2]}>
        <ShadowedMesh
          geometry={nodesLOD1k.rectangleTile27_1["geometry"]}
          material={materials1k.wallTile_mtl_1001}
        />
        <ShadowedMesh
          geometry={nodesLOD512.rectangleTile27_1["geometry"]}
          material={materials512.wallTile_mtl_1001}
        />
      </Detailed>
      <Detailed distances={[0, 2]}>
        <ShadowedMesh
          geometry={nodesLOD1k.rectangleTile28_1["geometry"]}
          material={materials1k.wallTile_mtl_1001}
        />
        <ShadowedMesh
          geometry={nodesLOD512.rectangleTile28_1["geometry"]}
          material={materials512.wallTile_mtl_1001}
        />
      </Detailed>
      <Detailed distances={[0, 2]}>
        <ShadowedMesh
          geometry={nodesLOD1k.rectangleTile29_1["geometry"]}
          material={materials1k.wallTile_mtl_1001}
        />
        <ShadowedMesh
          geometry={nodesLOD512.rectangleTile29_1["geometry"]}
          material={materials512.wallTile_mtl_1001}
        />
      </Detailed>
      <Detailed distances={[0, 2]}>
        <ShadowedMesh
          geometry={nodesLOD1k.rectangleTile30_1["geometry"]}
          material={materials1k.wallTile_mtl_1001}
        />
        <ShadowedMesh
          geometry={nodesLOD512.rectangleTile30_1["geometry"]}
          material={materials512.wallTile_mtl_1001}
        />
      </Detailed>
      <Detailed distances={[0, 2]}>
        <ShadowedMesh
          geometry={nodesLOD1k.rectangleTile31_1["geometry"]}
          material={materials1k.wallTile_mtl_1001}
        />
        <ShadowedMesh
          geometry={nodesLOD512.rectangleTile31_1["geometry"]}
          material={materials512.wallTile_mtl_1001}
        />
      </Detailed>
      <Detailed distances={[0, 2]}>
        <ShadowedMesh
          geometry={nodesLOD1k.rectangleTile32_1["geometry"]}
          material={materials1k.wallTile_mtl_1001}
        />
        <ShadowedMesh
          geometry={nodesLOD512.rectangleTile32_1["geometry"]}
          material={materials512.wallTile_mtl_1001}
        />
      </Detailed>
      <Detailed distances={[0, 2]}>
        <ShadowedMesh
          geometry={nodesLOD1k.rectangleTile33_1["geometry"]}
          material={materials1k.wallTile_mtl_1001}
        />
        <ShadowedMesh
          geometry={nodesLOD512.rectangleTile33_1["geometry"]}
          material={materials512.wallTile_mtl_1001}
        />
      </Detailed>
      <Detailed distances={[0, 2]}>
        <ShadowedMesh
          geometry={nodesLOD1k.rectangleTile34_1["geometry"]}
          material={materials1k.wallTile_mtl_1001}
        />
        <ShadowedMesh
          geometry={nodesLOD512.rectangleTile34_1["geometry"]}
          material={materials512.wallTile_mtl_1001}
        />
      </Detailed>
      <Detailed distances={[0, 2]}>
        <ShadowedMesh
          geometry={nodesLOD1k.rectangleTile35_1["geometry"]}
          material={materials1k.wallTile_mtl_1001}
        />
        <ShadowedMesh
          geometry={nodesLOD512.rectangleTile35_1["geometry"]}
          material={materials512.wallTile_mtl_1001}
        />
      </Detailed>
      <Detailed distances={[0, 2]}>
        <ShadowedMesh
          geometry={nodesLOD1k.rectangleTile36_1["geometry"]}
          material={materials1k.wallTile_mtl_1001}
        />
        <ShadowedMesh
          geometry={nodesLOD512.rectangleTile36_1["geometry"]}
          material={materials512.wallTile_mtl_1001}
        />
      </Detailed>
      <Detailed distances={[0, 2]}>
        <ShadowedMesh
          geometry={nodesLOD1k.rectangleTile37_1["geometry"]}
          material={materials1k.wallTile_mtl_1001}
        />
        <ShadowedMesh
          geometry={nodesLOD512.rectangleTile37_1["geometry"]}
          material={materials512.wallTile_mtl_1001}
        />
      </Detailed>
      <Detailed distances={[0, 2]}>
        <ShadowedMesh
          geometry={nodesLOD1k.rectangleTile38_1["geometry"]}
          material={materials1k.wallTile_mtl_1001}
        />
        <ShadowedMesh
          geometry={nodesLOD512.rectangleTile38_1["geometry"]}
          material={materials512.wallTile_mtl_1001}
        />
      </Detailed>
      <Detailed distances={[0, 2]}>
        <ShadowedMesh
          geometry={nodesLOD1k.rectangleTile39_1["geometry"]}
          material={materials1k.wallTile_mtl_1001}
        />
        <ShadowedMesh
          geometry={nodesLOD512.rectangleTile39_1["geometry"]}
          material={materials512.wallTile_mtl_1001}
        />
      </Detailed>
      <Detailed distances={[0, 2]}>
        <ShadowedMesh
          geometry={nodesLOD1k.rectangleTile40_1["geometry"]}
          material={materials1k.wallTile_mtl_1001}
        />
        <ShadowedMesh
          geometry={nodesLOD512.rectangleTile40_1["geometry"]}
          material={materials512.wallTile_mtl_1001}
        />
      </Detailed>
      <Detailed distances={[0, 2]}>
        <ShadowedMesh
          geometry={nodesLOD1k.rectangleTile41_1["geometry"]}
          material={materials1k.wallTile_mtl_1001}
        />
        <ShadowedMesh
          geometry={nodesLOD512.rectangleTile41_1["geometry"]}
          material={materials512.wallTile_mtl_1001}
        />
      </Detailed>
      <Detailed distances={[0, 2]}>
        <ShadowedMesh
          geometry={nodesLOD1k.rectangleTile42_1["geometry"]}
          material={materials1k.wallTile_mtl_1001}
        />
        <ShadowedMesh
          geometry={nodesLOD512.rectangleTile42_1["geometry"]}
          material={materials512.wallTile_mtl_1001}
        />
      </Detailed>
      <Detailed distances={[0, 2]}>
        <ShadowedMesh
          geometry={nodesLOD1k.rectangleTile43_1["geometry"]}
          material={materials1k.wallTile_mtl_1001}
        />
        <ShadowedMesh
          geometry={nodesLOD512.rectangleTile43_1["geometry"]}
          material={materials512.wallTile_mtl_1001}
        />
      </Detailed>
      <Detailed distances={[0, 2]}>
        <ShadowedMesh
          geometry={nodesLOD1k.rectangleTile44_1["geometry"]}
          material={materials1k.wallTile_mtl_1001}
        />
        <ShadowedMesh
          geometry={nodesLOD512.rectangleTile44_1["geometry"]}
          material={materials512.wallTile_mtl_1001}
        />
      </Detailed>
      <Detailed distances={[0, 2]}>
        <ShadowedMesh
          geometry={nodesLOD1k.rectangleTile45_1["geometry"]}
          material={materials1k.wallTile_mtl_1001}
        />
        <ShadowedMesh
          geometry={nodesLOD512.rectangleTile45_1["geometry"]}
          material={materials512.wallTile_mtl_1001}
        />
      </Detailed>
      <Detailed distances={[0, 2]}>
        <ShadowedMesh
          geometry={nodesLOD1k.rectangleTile46_1["geometry"]}
          material={materials1k.wallTile_mtl_1001}
        />
        <ShadowedMesh
          geometry={nodesLOD512.rectangleTile46_1["geometry"]}
          material={materials512.wallTile_mtl_1001}
        />
      </Detailed>
      <Detailed distances={[0, 2]}>
        <ShadowedMesh
          geometry={nodesLOD1k.rectangleTile47_1["geometry"]}
          material={materials1k.wallTile_mtl_1001}
        />
        <ShadowedMesh
          geometry={nodesLOD512.rectangleTile47_1["geometry"]}
          material={materials512.wallTile_mtl_1001}
        />
      </Detailed>
      <Detailed distances={[0, 2]}>
        <ShadowedMesh
          geometry={nodesLOD1k.rectangleTile48_1["geometry"]}
          material={materials1k.wallTile_mtl_1001}
        />
        <ShadowedMesh
          geometry={nodesLOD512.rectangleTile48_1["geometry"]}
          material={materials512.wallTile_mtl_1001}
        />
      </Detailed>
      <Detailed distances={[0, 2]}>
        <ShadowedMesh
          geometry={nodesLOD1k.rectangleTile49_1["geometry"]}
          material={materials1k.wallTile_mtl_1001}
        />
        <ShadowedMesh
          geometry={nodesLOD512.rectangleTile49_1["geometry"]}
          material={materials512.wallTile_mtl_1001}
        />
      </Detailed>
      <Detailed distances={[0, 2]}>
        <ShadowedMesh
          geometry={nodesLOD1k.rectangleTile50_1["geometry"]}
          material={materials1k.wallTile_mtl_1001}
        />
        <ShadowedMesh
          geometry={nodesLOD512.rectangleTile50_1["geometry"]}
          material={materials512.wallTile_mtl_1001}
        />
      </Detailed>
      <Detailed distances={[0, 2]}>
        <ShadowedMesh
          geometry={nodesLOD1k.rectangleTile51_1["geometry"]}
          material={materials1k.wallTile_mtl_1001}
        />
        <ShadowedMesh
          geometry={nodesLOD512.rectangleTile51_1["geometry"]}
          material={materials512.wallTile_mtl_1001}
        />
      </Detailed>
      <Detailed distances={[0, 2]}>
        <ShadowedMesh
          geometry={nodesLOD1k.rectangleTile52_1["geometry"]}
          material={materials1k.wallTile_mtl_1001}
        />
        <ShadowedMesh
          geometry={nodesLOD512.rectangleTile52_1["geometry"]}
          material={materials512.wallTile_mtl_1001}
        />
      </Detailed>
      <Detailed distances={[0, 2]}>
        <ShadowedMesh
          geometry={nodesLOD1k.rectangleTile53_1["geometry"]}
          material={materials1k.wallTile_mtl_1001}
        />
        <ShadowedMesh
          geometry={nodesLOD512.rectangleTile53_1["geometry"]}
          material={materials512.wallTile_mtl_1001}
        />
      </Detailed>
      <Detailed distances={[0, 2]}>
        <ShadowedMesh
          geometry={nodesLOD1k.rectangleTile54_1["geometry"]}
          material={materials1k.wallTile_mtl_1001}
        />
        <ShadowedMesh
          geometry={nodesLOD512.rectangleTile54_1["geometry"]}
          material={materials512.wallTile_mtl_1001}
        />
      </Detailed>
      <Detailed distances={[0, 2]}>
        <ShadowedMesh
          geometry={nodesLOD1k.rectangleTile55_1["geometry"]}
          material={materials1k.wallTile_mtl_1001}
        />
        <ShadowedMesh
          geometry={nodesLOD512.rectangleTile55_1["geometry"]}
          material={materials512.wallTile_mtl_1001}
        />
      </Detailed>
      <Detailed distances={[0, 2]}>
        <ShadowedMesh
          geometry={nodesLOD1k.rectangleTile56_1["geometry"]}
          material={materials1k.wallTile_mtl_1001}
        />
        <ShadowedMesh
          geometry={nodesLOD512.rectangleTile56_1["geometry"]}
          material={materials512.wallTile_mtl_1001}
        />
      </Detailed>
      <Detailed distances={[0, 2]}>
        <ShadowedMesh
          geometry={nodesLOD1k.rectangleTile57_1["geometry"]}
          material={materials1k.wallTile_mtl_1001}
        />
        <ShadowedMesh
          geometry={nodesLOD512.rectangleTile57_1["geometry"]}
          material={materials512.wallTile_mtl_1001}
        />
      </Detailed>
      <Detailed distances={[0, 2]}>
        <ShadowedMesh
          geometry={nodesLOD1k.rectangleTile58_1["geometry"]}
          material={materials1k.wallTile_mtl_1001}
        />
        <ShadowedMesh
          geometry={nodesLOD512.rectangleTile58_1["geometry"]}
          material={materials512.wallTile_mtl_1001}
        />
      </Detailed>
      <Detailed distances={[0, 2]}>
        <ShadowedMesh
          geometry={nodesLOD1k.rectangleTile59_1["geometry"]}
          material={materials1k.wallTile_mtl_1001}
        />
        <ShadowedMesh
          geometry={nodesLOD512.rectangleTile59_1["geometry"]}
          material={materials512.wallTile_mtl_1001}
        />
      </Detailed>
      <Detailed distances={[0, 2]}>
        <ShadowedMesh
          geometry={nodesLOD1k.rectangleTile60_1["geometry"]}
          material={materials1k.wallTile_mtl_1001}
        />
        <ShadowedMesh
          geometry={nodesLOD512.rectangleTile60_1["geometry"]}
          material={materials512.wallTile_mtl_1001}
        />
      </Detailed>
      <Detailed distances={[0, 2]}>
        <ShadowedMesh
          geometry={nodesLOD1k.rectangleTile61_1["geometry"]}
          material={materials1k.wallTile_mtl_1001}
        />
        <ShadowedMesh
          geometry={nodesLOD512.rectangleTile61_1["geometry"]}
          material={materials512.wallTile_mtl_1001}
        />
      </Detailed>
      <Detailed distances={[0, 2]}>
        <ShadowedMesh
          geometry={nodesLOD1k.rectangleTile62_1["geometry"]}
          material={materials1k.wallTile_mtl_1001}
        />
        <ShadowedMesh
          geometry={nodesLOD512.rectangleTile62_1["geometry"]}
          material={materials512.wallTile_mtl_1001}
        />
      </Detailed>
      <Detailed distances={[0, 2]}>
        <ShadowedMesh
          geometry={nodesLOD1k.rectangleTile63_1["geometry"]}
          material={materials1k.wallTile_mtl_1001}
        />
        <ShadowedMesh
          geometry={nodesLOD512.rectangleTile63_1["geometry"]}
          material={materials512.wallTile_mtl_1001}
        />
      </Detailed>
      <Detailed distances={[0, 2]}>
        <ShadowedMesh
          geometry={nodesLOD1k.rectangleTile64_1["geometry"]}
          material={materials1k.wallTile_mtl_1001}
        />
        <ShadowedMesh
          geometry={nodesLOD512.rectangleTile64_1["geometry"]}
          material={materials512.wallTile_mtl_1001}
        />
      </Detailed>
      <Detailed distances={[0, 2]}>
        <ShadowedMesh
          geometry={nodesLOD1k.rectangleTile65_1["geometry"]}
          material={materials1k.wallTile_mtl_1001}
        />
        <ShadowedMesh
          geometry={nodesLOD512.rectangleTile65_1["geometry"]}
          material={materials512.wallTile_mtl_1001}
        />
      </Detailed>
      <Detailed distances={[0, 2]}>
        <ShadowedMesh
          geometry={nodesLOD1k.rectangleTile66_1["geometry"]}
          material={materials1k.wallTile_mtl_1001}
        />
        <ShadowedMesh
          geometry={nodesLOD512.rectangleTile66_1["geometry"]}
          material={materials512.wallTile_mtl_1001}
        />
      </Detailed>
      <Detailed distances={[0, 2]}>
        <ShadowedMesh
          geometry={nodesLOD1k.rectangleTile67_1["geometry"]}
          material={materials1k.wallTile_mtl_1001}
        />
        <ShadowedMesh
          geometry={nodesLOD512.rectangleTile67_1["geometry"]}
          material={materials512.wallTile_mtl_1001}
        />
      </Detailed>
      <Detailed distances={[0, 2]}>
        <ShadowedMesh
          geometry={nodesLOD1k.rectangleTile68_1["geometry"]}
          material={materials1k.wallTile_mtl_1001}
        />
        <ShadowedMesh
          geometry={nodesLOD512.rectangleTile68_1["geometry"]}
          material={materials512.wallTile_mtl_1001}
        />
      </Detailed>
      <Detailed distances={[0, 2]}>
        <ShadowedMesh
          geometry={nodesLOD1k.rectangleTile69_1["geometry"]}
          material={materials1k.wallTile_mtl_1001}
        />
        <ShadowedMesh
          geometry={nodesLOD512.rectangleTile69_1["geometry"]}
          material={materials512.wallTile_mtl_1001}
        />
      </Detailed>
      <Detailed distances={[0, 2]}>
        <ShadowedMesh
          geometry={nodesLOD1k.rectangleTile70_1["geometry"]}
          material={materials1k.wallTile_mtl_1001}
        />
        <ShadowedMesh
          geometry={nodesLOD512.rectangleTile70_1["geometry"]}
          material={materials512.wallTile_mtl_1001}
        />
      </Detailed>
      <Detailed distances={[0, 2]}>
        <ShadowedMesh
          geometry={nodesLOD1k.rectangleTile71_1["geometry"]}
          material={materials1k.wallTile_mtl_1001}
        />
        <ShadowedMesh
          geometry={nodesLOD512.rectangleTile71_1["geometry"]}
          material={materials512.wallTile_mtl_1001}
        />
      </Detailed>
      <Detailed distances={[0, 2]}>
        <ShadowedMesh
          geometry={nodesLOD1k.rectangleTile72_1["geometry"]}
          material={materials1k.wallTile_mtl_1001}
        />
        <ShadowedMesh
          geometry={nodesLOD512.rectangleTile72_1["geometry"]}
          material={materials512.wallTile_mtl_1001}
        />
      </Detailed>
      <Detailed distances={[0, 2]}>
        <ShadowedMesh
          geometry={nodesLOD1k.rectangleTile73_1["geometry"]}
          material={materials1k.wallTile_mtl_1001}
        />
        <ShadowedMesh
          geometry={nodesLOD512.rectangleTile73_1["geometry"]}
          material={materials512.wallTile_mtl_1001}
        />
      </Detailed>
      <Detailed distances={[0, 2]}>
        <ShadowedMesh
          geometry={nodesLOD1k.rectangleTile74_1["geometry"]}
          material={materials1k.wallTile_mtl_1001}
        />
        <ShadowedMesh
          geometry={nodesLOD512.rectangleTile74_1["geometry"]}
          material={materials512.wallTile_mtl_1001}
        />
      </Detailed>
      <Detailed distances={[0, 2]}>
        <ShadowedMesh
          geometry={nodesLOD1k.rectangleTile75_1["geometry"]}
          material={materials1k.wallTile_mtl_1001}
        />
        <ShadowedMesh
          geometry={nodesLOD512.rectangleTile75_1["geometry"]}
          material={materials512.wallTile_mtl_1001}
        />
      </Detailed>
      <Detailed distances={[0, 2]}>
        <ShadowedMesh
          geometry={nodesLOD1k.wall_1["geometry"]}
          material={materials1k.wall_mtl_1001}
        />
        <ShadowedMesh
          geometry={nodesLOD512.wall_1["geometry"]}
          material={materials512.wall_mtl_1001}
        />
      </Detailed>
      <Detailed distances={[0, 2]}>
        <ShadowedMesh
          geometry={nodesLOD1k.r_trimming_1["geometry"]}
          material={materials1k.wall_mtl_1001}
        />
        <ShadowedMesh
          geometry={nodesLOD512.r_trimming_1["geometry"]}
          material={materials512.wall_mtl_1001}
        />
      </Detailed>
      <Detailed distances={[0, 2]}>
        <ShadowedMesh
          geometry={nodesLOD1k.l_trimming_1["geometry"]}
          material={materials1k.wall_mtl_1001}
        />
        <ShadowedMesh
          geometry={nodesLOD512.l_trimming_1["geometry"]}
          material={materials512.wall_mtl_1001}
        />
      </Detailed>
      <Detailed distances={[0, 2]}>
        <mesh
          receiveShadow
          geometry={nodesLOD1k.upperGlass_1["geometry"]}
          material={materials1k.glass_mtl_1001}
        />
        <mesh
          receiveShadow
          geometry={nodesLOD512.upperGlass_1["geometry"]}
          material={materials512.glass_mtl_1001}
        />
      </Detailed>
      <Detailed distances={[0, 2]}>
        <mesh
          receiveShadow
          geometry={nodesLOD1k.lowerGlass_1["geometry"]}
          material={materials1k.glass_mtl_1001}
        />
        <mesh
          receiveShadow
          geometry={nodesLOD512.lowerGlass_1["geometry"]}
          material={materials512.glass_mtl_1001}
        />
      </Detailed>
      <Detailed distances={[0, 2]}>
        <mesh
          castShadow
          geometry={nodesLOD1k.windowSill_1["geometry"]}
          material={materials1k.window_mtl_1001}
        />
        <mesh
          castShadow
          geometry={nodesLOD512.windowSill_1["geometry"]}
          material={materials512.window_mtl_1001}
        />
      </Detailed>
      <Detailed distances={[0, 2]}>
        <ShadowedMesh
          geometry={nodesLOD1k.upperPaneSill_1["geometry"]}
          material={materials1k.window_mtl_1001}
        />
        <ShadowedMesh
          geometry={nodesLOD512.upperPaneSill_1["geometry"]}
          material={materials512.window_mtl_1001}
        />
      </Detailed>
      <Detailed distances={[0, 2]}>
        <ShadowedMesh
          geometry={nodesLOD1k.lowerPaneSill_1["geometry"]}
          material={materials1k.window_mtl_1001}
        />
        <ShadowedMesh
          geometry={nodesLOD512.lowerPaneSill_1["geometry"]}
          material={materials512.window_mtl_1001}
        />
      </Detailed>
      <Detailed distances={[0, 2]}>
        <ShadowedMesh
          geometry={nodesLOD1k.latchCase_1["geometry"]}
          material={materials1k.window_mtl_1001}
        />
        <ShadowedMesh
          geometry={nodesLOD512.latchCase_1["geometry"]}
          material={materials512.window_mtl_1001}
        />
      </Detailed>
      <Detailed distances={[0, 2]}>
        <ShadowedMesh
          geometry={nodesLOD1k.latch_1["geometry"]}
          material={materials1k.window_mtl_1001}
        />
        <ShadowedMesh
          geometry={nodesLOD512.latch_1["geometry"]}
          material={materials512.window_mtl_1001}
        />
      </Detailed>
      <Detailed distances={[0, 2]}>
        <ShadowedMesh
          geometry={nodesLOD1k.handle_1["geometry"]}
          material={materials1k.window_mtl_1001}
        />
        <ShadowedMesh
          geometry={nodesLOD512.handle_1["geometry"]}
          material={materials512.window_mtl_1001}
        />
      </Detailed>
      <Detailed distances={[0, 2]}>
        <ShadowedMesh
          geometry={nodesLOD1k.floorBase_1["geometry"]}
          material={materials1k.floor_mtl_1001}
        />
        <ShadowedMesh
          geometry={nodesLOD512.floorBase_1["geometry"]}
          material={materials512.floor_mtl_1001}
        />
      </Detailed>
      <Detailed distances={[0, 2]}>
        <ShadowedMesh
          geometry={nodesLOD1k.floorTile_1["geometry"]}
          material={materials1k.floor_mtl_1001}
        />
        <ShadowedMesh
          geometry={nodesLOD512.floorTile_1["geometry"]}
          material={materials512.floor_mtl_1001}
        />
      </Detailed>
    </group>
  );
}
