import { useGLTF } from "@react-three/drei";
import { useConfig } from "@store";
import extend from "just-extend";
import { useControls } from "leva";

const config = {
  "model": "sink.glb",
  "512": "/sink/512",
  "quality": "512"
};

export function Sink(props) {
  const sink = useConfig(e => e.Sink);
  const { nodes, materials } = useGLTF(
    `${config[config.quality]}/${config.model}`
  );
  const sinkProps = useControls("Sink", extend(true, sink, {}), {
    collapsed: true
  });
  return (
    <group
      {...{ ...props, ...sinkProps }}
      position={[-0.02, 0.004, 0.03]}
      rotation={[0, 0, 0]}
      dispose={null}>
      <group scale={0.01}>
        <mesh
          castShadow
          receiveShadow
          visible={sinkProps["Sink"]}
          geometry={nodes.l_faucetHandle_1["geometry"]}
          material={materials.chrome_mtl_1001}
        />
        <mesh
          castShadow
          receiveShadow
          visible={sinkProps["Sink"]}
          geometry={nodes.r_faucetHandle_1["geometry"]}
          material={materials.chrome_mtl_1001}
        />
        <mesh
          castShadow
          receiveShadow
          visible={sinkProps["Sink"]}
          geometry={nodes.spout_1["geometry"]}
          material={materials.chrome_mtl_1001}
        />
        <mesh
          castShadow
          receiveShadow
          visible={sinkProps["Sink"]}
          geometry={nodes.faucetBase_1["geometry"]}
          material={materials.chrome_mtl_1001}
        />
        <mesh
          castShadow
          receiveShadow
          visible={sinkProps["Sink"]}
          geometry={nodes.sink_1["geometry"]}
          material={materials.steel_mtl_1001}
        />
        <mesh
          castShadow
          receiveShadow
          visible={sinkProps["Sink"]}
          geometry={nodes.drain_1["geometry"]}
          material={materials.chrome_mtl_1001}
        />
      </group>
    </group>
  );
}
