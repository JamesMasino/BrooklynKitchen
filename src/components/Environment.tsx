import {
  BakeShadows,
  ContactShadows,
  OrbitControls,
  Sky,
  // SoftShadows,
  Stage
} from "@react-three/drei";
import { useConfig } from "@store";
import extend from "just-extend";
import { useControls } from "leva";

export const ShadowedMesh = props => {
  return <mesh castShadow receiveShadow {...props} />;
};

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
      <group>
        {/* <SoftShadows {...config} samples={Math.min(15, 25)} /> */}
        <ambientLight intensity={1} position={[-2, 0, 0]} color={0xc99252} />
        <directionalLight
          castShadow
          intensity={11}
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
        <pointLight intensity={0} position={[0.8, 0, -0.2]} color={0xc99252} />
        {/*spotlights exist! Will dev in next pass. They can use penumbra={1}*/}
        <pointLight
          intensity={4}
          position={[-0.5, 0.2, -0.2]}
          color={0xc99252}
        />
        <pointLight intensity={1} position={[-0.5, -0.6, 0]} color={0xc99252} />
      </group>
      <Sky {...skyProps} />
      <group visible={true}>
        <mesh position={[0, 1.38, 0]} castShadow receiveShadow visible={true}>
          <boxGeometry attach="geometry" args={[3.6, 0.1, 2.6]} />
          <meshStandardMaterial
            attach="material"
            color="#ffffff"
            opacity={0}
            transparent
          />
        </mesh>
        <mesh position={[1.75, 0, 0]} castShadow receiveShadow visible={true}>
          <boxGeometry attach="geometry" args={[0.1, 2.6, 2.6]} />
          <meshStandardMaterial
            attach="material"
            color="#ffffff"
            opacity={0}
            transparent
          />
        </mesh>
        <mesh
          position={[0, 0.085, 1.47]}
          castShadow
          receiveShadow
          visible={true}>
          <boxGeometry attach="geometry" args={[3.4, 2.5, 0.5]} />
          <meshStandardMaterial
            attach="material"
            color="#ffffff"
            opacity={0}
            transparent
          />
        </mesh>
      </group>
      <Stage {...stageProps}>
        {children}
        <ContactShadows scale={1} blur={4} />
        <OrbitControls
          /*makeDefault*/
          /*target={[0, -0.3, 0]}*/
          minDistance={1.5}
          maxDistance={7.9}
          minPolarAngle={Math.PI / 2.75}
          maxPolarAngle={Math.PI / 2}
          minAzimuthAngle={0.2}
          maxAzimuthAngle={1}
        />
        <BakeShadows />
      </Stage>
    </>
  );
}
