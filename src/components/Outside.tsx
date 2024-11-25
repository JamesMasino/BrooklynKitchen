import { Detailed, useGLTF } from "@react-three/drei";
import { useConfig } from "@store";
import extend from "just-extend";
import { useControls } from "leva";
import { Suspense } from "react";

const config = {
  "model": "outside.glb",
  "128": "/outside/128",
  "512": "/outside/512",
  "1k": "/outside/1k",
  "2k": "/outside/2k",
  "LOD128": "128",
  "LOD512": "2k",
  "LOD1k": "2k",
  "LOD2k": "2k"
};
const configs = {
  LOD128: config.LOD128,
  LOD512: config.LOD512,
  LOD1k: config.LOD1k,
  LOD2k: config.LOD2k
};

export function Outside(props) {
  const outside = useConfig(e => e.Outside);
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
  const outsideProps = useControls("Outside", extend(true, outside, {}), {
    collapsed: true
  });
  return (
    <group
      {...props}
      position={[4, -3, -6]}
      rotation={[0, 0.1, -0.025]}
      scale={0.016}
      visible={outsideProps["Outside"]}
      dispose={null}>
      <Suspense
        fallback={
          <mesh
            geometry={nodesLOD128.Outside_geo_1["geometry"]}
            material={materials128.outside_mtl_1001}></mesh>
        }>
        <Detailed distances={[0, 1, 2]}>
          <mesh
            geometry={nodesLOD2k.Outside_geo_1["geometry"]}
            material={materials2k.outside_mtl_1001}></mesh>
          <mesh
            geometry={nodesLOD1k.Outside_geo_1["geometry"]}
            material={materials1k.outside_mtl_1001}></mesh>
          <mesh
            geometry={nodesLOD512.Outside_geo_1["geometry"]}
            material={materials512.outside_mtl_1001}></mesh>
        </Detailed>
      </Suspense>
    </group>
  );
}
