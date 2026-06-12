import {
  BakeShadows,
  ContactShadows,
  OrbitControls,
  PerspectiveCamera,
  Sky,
  // SoftShadows,
  Stage
} from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useConfig } from "@store";
import extend from "just-extend";
import { useControls } from "leva";
import { useRef } from "react";
import * as THREE from "three";

export const ShadowedMesh = props => {
  return <mesh castShadow receiveShadow {...props} />;
};

export function Environment({ children }) {
  // Camera Idle Animation
  const controlsRef = useRef<any>(null);
  const interacting = useRef(false);
  const isFloating = useRef(true);
  const lastInteraction = useRef(0);
  const initialized = useRef(false);

  // Start empty and grab coordinates dynamically.
  const baseSpherical = useRef(new THREE.Spherical());
  const floatTime = useRef(0);

  useFrame((state, delta) => {
    if (!controlsRef.current) return;

    // Capture the camera's position on the exact frame the loop starts
    if (!initialized.current) {
      baseSpherical.current.setFromVector3(state.camera.position);
      initialized.current = true;
    }

    if (!interacting.current && !isFloating.current) {
      if (Date.now() - lastInteraction.current > 500) {
        isFloating.current = true;
        floatTime.current = 0;

        // Capture the exact zoom and angles where the user stopped
        baseSpherical.current.setFromVector3(state.camera.position);
      }
    }

    if (isFloating.current) {
      floatTime.current += delta;

      const floatSpeed = 0.25;
      const thetaOffset = Math.sin(floatTime.current * floatSpeed) * 0.06;
      const phiOffset =
        Math.sin(floatTime.current * (floatSpeed * 0.3)) * 0.025;

      const targetSpherical = new THREE.Spherical(
        baseSpherical.current.radius,
        baseSpherical.current.phi + phiOffset,
        baseSpherical.current.theta + thetaOffset
      );

      const targetPosition = new THREE.Vector3().setFromSpherical(
        targetSpherical
      );

      state.camera.position.lerp(targetPosition, 1);
      controlsRef.current.update();
    }
  });

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
      <PerspectiveCamera
        makeDefault
        fov={80}
        position={[2.6, 1, 2.6]}
        zoom={4}
      />
      <OrbitControls
        ref={controlsRef}
        onStart={() => {
          interacting.current = true;
          isFloating.current = false;
        }}
        onEnd={() => {
          interacting.current = false;
          lastInteraction.current = Date.now();
        }}
        /*makeDefault*/
        // target={[0, -0.3, 0]}
        enablePan={false}
        // minDistance={2}
        maxDistance={4}
        minPolarAngle={Math.PI / 2.75}
        maxPolarAngle={Math.PI / 2}
        minAzimuthAngle={0.25}
        maxAzimuthAngle={1}
        enableDamping={true}
        dampingFactor={0.3}
      />
      <Stage adjustCamera={false} {...stageProps}>
        {children}
        <ContactShadows scale={1} blur={4} />
        <BakeShadows />
      </Stage>
    </>
  );
}
