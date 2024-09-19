import { Detailed, useGLTF } from "@react-three/drei";
import { useConfig } from "@store";
import extend from "just-extend";
import { useControls } from "leva";
import { Suspense } from "react";
import { ShadowedMesh } from "./Environment";

const config = {
  "model": "kitchenRoom.glb",
  "512": "/kitchenRoom/512",
  "1k": "/kitchenRoom/1k",
  "2k": "/kitchenRoom/2k",
  "LOD512": "512",
  "LOD1k": "1k",
  "LOD2k": "2k"
};
const configs = {
  LOD512: config.LOD512,
  LOD1k: config.LOD1k,
  LOD2k: config.LOD2k
};

export function KitchenRoom(props) {
  const kitchenRoom = useConfig(e => e.KitchenRoom);
  const { nodes: nodesLOD512, materials: materials512 } = useGLTF(
    `${config[configs.LOD512]}/${config.model}`
  );
  const { nodes: nodesLOD1k, materials: materials1k } = useGLTF(
    `${config[configs.LOD1k]}/${config.model}`
  );
  const { nodes: nodesLOD2k, materials: materials2k } = useGLTF(
    `${config[configs.LOD2k]}/${config.model}`
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
      <Suspense
        fallback={
          <ShadowedMesh
            geometry={nodesLOD512.squareTiles_1["geometry"]}
            material={materials512.windowTile_mtl_1001}
          />
        }>
        <Detailed distances={[0, 1, 2]}>
          <ShadowedMesh
            geometry={nodesLOD2k.squareTiles_1["geometry"]}
            material={materials2k.windowTile_mtl_1001}
          />
          <ShadowedMesh
            geometry={nodesLOD1k.squareTiles_1["geometry"]}
            material={materials1k.windowTile_mtl_1001}
          />
          <ShadowedMesh
            geometry={nodesLOD512.squareTiles_1["geometry"]}
            material={materials512.windowTile_mtl_1001}
          />
        </Detailed>
      </Suspense>

      <Suspense
        fallback={
          <ShadowedMesh
            geometry={nodesLOD512.wallCorner_1["geometry"]}
            material={materials512.windowTile_mtl_1001}
          />
        }>
        <Detailed distances={[0, 1, 2]}>
          <ShadowedMesh
            geometry={nodesLOD2k.wallCorner_1["geometry"]}
            material={materials2k.windowTile_mtl_1001}
          />
          <ShadowedMesh
            geometry={nodesLOD1k.wallCorner_1["geometry"]}
            material={materials1k.windowTile_mtl_1001}
          />
          <ShadowedMesh
            geometry={nodesLOD512.wallCorner_1["geometry"]}
            material={materials512.windowTile_mtl_1001}
          />
        </Detailed>
      </Suspense>

      <Suspense
        fallback={
          <ShadowedMesh
            geometry={nodesLOD512.windowTileBack_1["geometry"]}
            material={materials512.windowTile_mtl_1001}
          />
        }>
        <Detailed distances={[0, 1, 2]}>
          <ShadowedMesh
            geometry={nodesLOD2k.windowTileBack_1["geometry"]}
            material={materials2k.windowTile_mtl_1001}
          />
          <ShadowedMesh
            geometry={nodesLOD1k.windowTileBack_1["geometry"]}
            material={materials1k.windowTile_mtl_1001}
          />
          <ShadowedMesh
            geometry={nodesLOD512.windowTileBack_1["geometry"]}
            material={materials512.windowTile_mtl_1001}
          />
        </Detailed>
      </Suspense>

      <Suspense
        fallback={
          <ShadowedMesh
            geometry={nodesLOD512.rectangleTiles_1["geometry"]}
            material={materials512.wallTile_mtl_1001}
          />
        }>
        <Detailed distances={[0, 1, 2]}>
          <ShadowedMesh
            geometry={nodesLOD2k.rectangleTiles_1["geometry"]}
            material={materials2k.wallTile_mtl_1001}
          />
          <ShadowedMesh
            geometry={nodesLOD1k.rectangleTiles_1["geometry"]}
            material={materials1k.wallTile_mtl_1001}
          />
          <ShadowedMesh
            geometry={nodesLOD512.rectangleTiles_1["geometry"]}
            material={materials512.wallTile_mtl_1001}
          />
        </Detailed>
      </Suspense>

      <Suspense
        fallback={
          <ShadowedMesh
            geometry={nodesLOD512.wallTileBack_1["geometry"]}
            material={materials512.wallTile_mtl_1001}
          />
        }>
        <Detailed distances={[0, 1, 2]}>
          <ShadowedMesh
            geometry={nodesLOD2k.wallTileBack_1["geometry"]}
            material={materials2k.wallTile_mtl_1001}
          />
          <ShadowedMesh
            geometry={nodesLOD1k.wallTileBack_1["geometry"]}
            material={materials1k.wallTile_mtl_1001}
          />
          <ShadowedMesh
            geometry={nodesLOD512.wallTileBack_1["geometry"]}
            material={materials512.wallTile_mtl_1001}
          />
        </Detailed>
      </Suspense>

      <Suspense
        fallback={
          <ShadowedMesh
            geometry={nodesLOD512.wall_1["geometry"]}
            material={materials512.wall_mtl_1001}
          />
        }>
        <Detailed distances={[0, 1, 2]}>
          <ShadowedMesh
            geometry={nodesLOD2k.wall_1["geometry"]}
            material={materials2k.wall_mtl_1001}
          />
          <ShadowedMesh
            geometry={nodesLOD1k.wall_1["geometry"]}
            material={materials1k.wall_mtl_1001}
          />
          <ShadowedMesh
            geometry={nodesLOD512.wall_1["geometry"]}
            material={materials512.wall_mtl_1001}
          />
        </Detailed>
      </Suspense>

      <Suspense
        fallback={
          <ShadowedMesh
            geometry={nodesLOD512.r_trimming_1["geometry"]}
            material={materials512.wall_mtl_1001}
          />
        }>
        <Detailed distances={[0, 1, 2]}>
          <ShadowedMesh
            geometry={nodesLOD2k.r_trimming_1["geometry"]}
            material={materials2k.wall_mtl_1001}
          />
          <ShadowedMesh
            geometry={nodesLOD1k.r_trimming_1["geometry"]}
            material={materials1k.wall_mtl_1001}
          />
          <ShadowedMesh
            geometry={nodesLOD512.r_trimming_1["geometry"]}
            material={materials512.wall_mtl_1001}
          />
        </Detailed>
      </Suspense>

      <Suspense
        fallback={
          <ShadowedMesh
            geometry={nodesLOD512.l_trimming_1["geometry"]}
            material={materials512.wall_mtl_1001}
          />
        }>
        <Detailed distances={[0, 1, 2]}>
          <ShadowedMesh
            geometry={nodesLOD2k.l_trimming_1["geometry"]}
            material={materials2k.wall_mtl_1001}
          />
          <ShadowedMesh
            geometry={nodesLOD1k.l_trimming_1["geometry"]}
            material={materials1k.wall_mtl_1001}
          />
          <ShadowedMesh
            geometry={nodesLOD512.l_trimming_1["geometry"]}
            material={materials512.wall_mtl_1001}
          />
        </Detailed>
      </Suspense>

      <Suspense
        fallback={
          <mesh
            receiveShadow
            geometry={nodesLOD512.upperGlass_1["geometry"]}
            material={materials512.glass_mtl_1001}
          />
        }>
        <Detailed distances={[0, 1, 2]}>
          <mesh
            receiveShadow
            geometry={nodesLOD2k.upperGlass_1["geometry"]}
            material={materials2k.glass_mtl_1001}
          />
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
      </Suspense>

      <Suspense
        fallback={
          <mesh
            receiveShadow
            geometry={nodesLOD512.lowerGlass_1["geometry"]}
            material={materials512.glass_mtl_1001}
          />
        }>
        <Detailed distances={[0, 1, 2]}>
          <mesh
            receiveShadow
            geometry={nodesLOD2k.lowerGlass_1["geometry"]}
            material={materials2k.glass_mtl_1001}
          />
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
      </Suspense>

      <Suspense
        fallback={
          <mesh
            castShadow
            geometry={nodesLOD512.windowSill_1["geometry"]}
            material={materials512.window_mtl_1001}
          />
        }>
        <Detailed distances={[0, 1, 2]}>
          <mesh
            castShadow
            geometry={nodesLOD2k.windowSill_1["geometry"]}
            material={materials2k.window_mtl_1001}
          />
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
      </Suspense>

      <Suspense
        fallback={
          <ShadowedMesh
            geometry={nodesLOD512.upperPaneSill_1["geometry"]}
            material={materials512.window_mtl_1001}
          />
        }>
        <Detailed distances={[0, 1, 2]}>
          <ShadowedMesh
            geometry={nodesLOD2k.upperPaneSill_1["geometry"]}
            material={materials2k.window_mtl_1001}
          />
          <ShadowedMesh
            geometry={nodesLOD1k.upperPaneSill_1["geometry"]}
            material={materials1k.window_mtl_1001}
          />
          <ShadowedMesh
            geometry={nodesLOD512.upperPaneSill_1["geometry"]}
            material={materials512.window_mtl_1001}
          />
        </Detailed>
      </Suspense>

      <Suspense
        fallback={
          <ShadowedMesh
            geometry={nodesLOD512.lowerPaneSill_1["geometry"]}
            material={materials512.window_mtl_1001}
          />
        }>
        <Detailed distances={[0, 1, 2]}>
          <ShadowedMesh
            geometry={nodesLOD2k.lowerPaneSill_1["geometry"]}
            material={materials2k.window_mtl_1001}
          />
          <ShadowedMesh
            geometry={nodesLOD1k.lowerPaneSill_1["geometry"]}
            material={materials1k.window_mtl_1001}
          />
          <ShadowedMesh
            geometry={nodesLOD512.lowerPaneSill_1["geometry"]}
            material={materials512.window_mtl_1001}
          />
        </Detailed>
      </Suspense>

      <Suspense
        fallback={
          <ShadowedMesh
            geometry={nodesLOD512.latchCase_1["geometry"]}
            material={materials512.window_mtl_1001}
          />
        }>
        <Detailed distances={[0, 1, 2]}>
          <ShadowedMesh
            geometry={nodesLOD2k.latchCase_1["geometry"]}
            material={materials2k.window_mtl_1001}
          />
          <ShadowedMesh
            geometry={nodesLOD1k.latchCase_1["geometry"]}
            material={materials1k.window_mtl_1001}
          />
          <ShadowedMesh
            geometry={nodesLOD512.latchCase_1["geometry"]}
            material={materials512.window_mtl_1001}
          />
        </Detailed>
      </Suspense>

      <Suspense
        fallback={
          <ShadowedMesh
            geometry={nodesLOD512.latch_1["geometry"]}
            material={materials512.window_mtl_1001}
          />
        }>
        <Detailed distances={[0, 1, 2]}>
          <ShadowedMesh
            geometry={nodesLOD2k.latch_1["geometry"]}
            material={materials2k.window_mtl_1001}
          />
          <ShadowedMesh
            geometry={nodesLOD1k.latch_1["geometry"]}
            material={materials1k.window_mtl_1001}
          />
          <ShadowedMesh
            geometry={nodesLOD512.latch_1["geometry"]}
            material={materials512.window_mtl_1001}
          />
        </Detailed>
      </Suspense>

      <Suspense
        fallback={
          <ShadowedMesh
            geometry={nodesLOD512.handle_1["geometry"]}
            material={materials512.window_mtl_1001}
          />
        }>
        <Detailed distances={[0, 1, 2]}>
          <ShadowedMesh
            geometry={nodesLOD2k.handle_1["geometry"]}
            material={materials2k.window_mtl_1001}
          />
          <ShadowedMesh
            geometry={nodesLOD1k.handle_1["geometry"]}
            material={materials1k.window_mtl_1001}
          />
          <ShadowedMesh
            geometry={nodesLOD512.handle_1["geometry"]}
            material={materials512.window_mtl_1001}
          />
        </Detailed>
      </Suspense>

      <Suspense
        fallback={
          <ShadowedMesh
            geometry={nodesLOD512.floorBase_1["geometry"]}
            material={materials512.floor_mtl_1001}
          />
        }>
        <Detailed distances={[0, 1, 2]}>
          <ShadowedMesh
            geometry={nodesLOD2k.floorBase_1["geometry"]}
            material={materials2k.floor_mtl_1001}
          />
          <ShadowedMesh
            geometry={nodesLOD1k.floorBase_1["geometry"]}
            material={materials1k.floor_mtl_1001}
          />
          <ShadowedMesh
            geometry={nodesLOD512.floorBase_1["geometry"]}
            material={materials512.floor_mtl_1001}
          />
        </Detailed>
      </Suspense>

      <Suspense
        fallback={
          <ShadowedMesh
            geometry={nodesLOD512.floorTile_1["geometry"]}
            material={materials512.floor_mtl_1001}
          />
        }>
        <Detailed distances={[0, 1.9, 2.5]}>
          <ShadowedMesh
            geometry={nodesLOD2k.floorTile_1["geometry"]}
            material={materials2k.floor_mtl_1001}
          />
          <ShadowedMesh
            geometry={nodesLOD1k.floorTile_1["geometry"]}
            material={materials1k.floor_mtl_1001}
          />
          <ShadowedMesh
            geometry={nodesLOD512.floorTile_1["geometry"]}
            material={materials512.floor_mtl_1001}
          />
        </Detailed>
      </Suspense>
    </group>
  );
}
