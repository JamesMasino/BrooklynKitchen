import { Detailed, useGLTF } from "@react-three/drei";
import { useConfig } from "@store";
import extend from "just-extend";
import { useControls } from "leva";
import { Suspense } from "react";
import { ShadowedMesh } from "./Environment";

const config = {
  "model": "sink.glb",
  "128": "/sink/128",
  "512": "/sink/512",
  "1k": "/sink/1k",
  "2k": "/sink/2k",
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

export function Sink(props) {
  const sink = useConfig(e => e.Sink);
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
  const sinkProps = useControls("Sink", extend(true, sink, {}), {
    collapsed: true
  });
  return (
    <group
      {...{ ...props, ...sinkProps }}
      position={[-0.02, 0.004, 0.03]}
      rotation={[0, 0, 0]}
      visible={sinkProps["Sink"]}
      scale={0.01}
      dispose={null}>
      <Suspense
        fallback={
          <ShadowedMesh
            geometry={nodesLOD128.l_faucetHandle_1["geometry"]}
            material={materials128.chrome_mtl_1001}
          />
        }>
        <Detailed distances={[0, 1.5, 2.5]}>
          <ShadowedMesh
            geometry={nodesLOD2k.l_faucetHandle_1["geometry"]}
            material={materials2k.chrome_mtl_1001}
          />
          <ShadowedMesh
            geometry={nodesLOD1k.l_faucetHandle_1["geometry"]}
            material={materials1k.chrome_mtl_1001}
          />
          <ShadowedMesh
            geometry={nodesLOD512.l_faucetHandle_1["geometry"]}
            material={materials512.chrome_mtl_1001}
          />
        </Detailed>
      </Suspense>

      <Suspense
        fallback={
          <ShadowedMesh
            geometry={nodesLOD128.r_faucetHandle_1["geometry"]}
            material={materials128.chrome_mtl_1001}
          />
        }>
        <Detailed distances={[0, 1.5, 2.5]}>
          <ShadowedMesh
            geometry={nodesLOD2k.r_faucetHandle_1["geometry"]}
            material={materials2k.chrome_mtl_1001}
          />
          <ShadowedMesh
            geometry={nodesLOD1k.r_faucetHandle_1["geometry"]}
            material={materials1k.chrome_mtl_1001}
          />
          <ShadowedMesh
            geometry={nodesLOD512.r_faucetHandle_1["geometry"]}
            material={materials512.chrome_mtl_1001}
          />
        </Detailed>
      </Suspense>

      <Suspense
        fallback={
          <ShadowedMesh
            geometry={nodesLOD128.spout_1["geometry"]}
            material={materials128.chrome_mtl_1001}
          />
        }>
        <Detailed distances={[0, 1.5, 2.5]}>
          <ShadowedMesh
            geometry={nodesLOD2k.spout_1["geometry"]}
            material={materials2k.chrome_mtl_1001}
          />
          <ShadowedMesh
            geometry={nodesLOD1k.spout_1["geometry"]}
            material={materials1k.chrome_mtl_1001}
          />
          <ShadowedMesh
            geometry={nodesLOD512.spout_1["geometry"]}
            material={materials512.chrome_mtl_1001}
          />
        </Detailed>
      </Suspense>

      <Suspense
        fallback={
          <ShadowedMesh
            geometry={nodesLOD128.faucetBase_1["geometry"]}
            material={materials128.chrome_mtl_1001}
          />
        }>
        <Detailed distances={[0, 1.5, 2.5]}>
          <ShadowedMesh
            geometry={nodesLOD2k.faucetBase_1["geometry"]}
            material={materials2k.chrome_mtl_1001}
          />
          <ShadowedMesh
            geometry={nodesLOD1k.faucetBase_1["geometry"]}
            material={materials1k.chrome_mtl_1001}
          />
          <ShadowedMesh
            geometry={nodesLOD512.faucetBase_1["geometry"]}
            material={materials512.chrome_mtl_1001}
          />
        </Detailed>
      </Suspense>

      <Suspense
        fallback={
          <ShadowedMesh
            geometry={nodesLOD128.sink_1["geometry"]}
            material={materials128.steel_mtl_1001}
          />
        }>
        <Detailed distances={[0, 1.5, 2.5]}>
          <ShadowedMesh
            geometry={nodesLOD2k.sink_1["geometry"]}
            material={materials2k.steel_mtl_1001}
          />
          <ShadowedMesh
            geometry={nodesLOD1k.sink_1["geometry"]}
            material={materials1k.steel_mtl_1001}
          />
          <ShadowedMesh
            geometry={nodesLOD512.sink_1["geometry"]}
            material={materials512.steel_mtl_1001}
          />
        </Detailed>
      </Suspense>

      <Suspense
        fallback={
          <ShadowedMesh
            geometry={nodesLOD128.drain_1["geometry"]}
            material={materials128.chrome_mtl_1001}
          />
        }>
        <Detailed distances={[0, 1.5, 2.5]}>
          <ShadowedMesh
            geometry={nodesLOD2k.drain_1["geometry"]}
            material={materials2k.chrome_mtl_1001}
          />
          <ShadowedMesh
            geometry={nodesLOD1k.drain_1["geometry"]}
            material={materials1k.chrome_mtl_1001}
          />
          <ShadowedMesh
            geometry={nodesLOD512.drain_1["geometry"]}
            material={materials512.chrome_mtl_1001}
          />
        </Detailed>
      </Suspense>
    </group>
  );
}
