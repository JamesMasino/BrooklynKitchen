import { OrbitControls, Sky, Stage } from "@react-three/drei";
import { useConfig } from "@store";
import extend from "just-extend";
import { useControls } from "leva";

export function Environment({ children }) {
  const config = useConfig(e => e.Environment);
  const skyProps = useControls("Sky", config.Sky, {
    collapsed: config.Collapsed
  });
  const stageProps = useControls(
    "Stage",
    extend(true, config.Stage, {
      preset: {
        options: ["rembrandt", "portrait", "upfront", "soft"]
      },
      shadows: {
        options: [false, true, "contact", "accumulative"]
      },
      environment: {
        options: [
          false,
          "studio",
          "apartment",
          "city",
          "dawn",
          "forest",
          "lobby",
          "night",
          "park",
          "sunset",
          "warehouse"
        ]
      }
    }),
    {
      collapsed: true
    }
  );
  return (
    <>
      <ambientLight intensity={0.5} position={[0, 0, 1]} color={0xc99252} />
      <directionalLight
        castShadow
        intensity={8}
        position={[-15, 5, 15]}
        color={0xc99252}
        shadow-normalBias={0.1}
        shadow-mapSize-width={4096}
        shadow-mapSize-height={4096}
        shadow-camera-left={-12}
        shadow-camera-right={12}
        shadow-camera-top={12}
        shadow-camera-bottom={-12}
        shadow-camera-near={0.5}
        shadow-camera-far={200}
      />
      <pointLight
        castShadow
        intensity={20}
        position={[-2.1, 0.1, 0.2]}
        color={0xc99252}
      />
      <ambientLight intensity={1} position={[0, 0, 0.2]} color={0x664e3f} />
      <ambientLight intensity={3} position={[0, 2, 0]} color={0x475b70} />
      <Sky {...skyProps} />
      <Stage {...stageProps}>
        {children}
        <OrbitControls makeDefault />
      </Stage>
    </>
  );
}
