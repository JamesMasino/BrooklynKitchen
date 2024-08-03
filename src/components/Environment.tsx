import { BakeShadows, OrbitControls, Sky, Stage } from "@react-three/drei";
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
      <ambientLight intensity={1} position={[-2, 0, 0]} color={0xd4662e} />
      <directionalLight
        castShadow
        intensity={12}
        position={[-20, 10, 8]}
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
      <pointLight intensity={1} position={[2, 0, -0.2]} color={0xc99252} />
      <pointLight intensity={4} position={[-0.5, 0, -0.2]} color={0xc99252} />
      <Sky {...skyProps} />
      <Stage {...stageProps}>
        {children}
        <OrbitControls
          makeDefault
          minDistance={2}
          maxDistance={10}
          minPolarAngle={Math.PI / 2.75}
          maxPolarAngle={Math.PI / 2}
          target={[0, -1, 0]}
        />
        <BakeShadows />
      </Stage>
    </>
  );
}
