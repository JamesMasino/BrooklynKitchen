import {
  CoffeeMaker,
  CoffeeMug,
  CoffeePot,
  Environment,
  Fridge,
  KitchenRoom,
  LowerCabinetSink,
  Sink,
  Stove,
  UpperCabinets
} from "@components";
import { AdaptiveDpr, AdaptiveEvents, Preload } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { useWindowSize } from "@uidotdev/usehooks";
import { Suspense, useState } from "react";

export default function App() {
  const { width, height } = useWindowSize();
  const [dpr, setDpr] = useState(1);
  // const { progress } = useProgress();

  return (
    <Suspense
      fallback={
        <div className="suspense">
          {/* {" "}
          <div style={{ width: "100%", textAlign: "center" }}>
            <span>{progress.toFixed(2)}%</span>
            <div style={{ width: "100%", background: "#ccc" }}>
              <div
                style={{
                  width: `${progress}%`,
                  background: "white",
                  height: "10px"
                }}
              />
            </div>
          </div> */}
        </div>
      }>
      <Canvas
        performance={{ max: 0.5 }}
        frameloop="demand"
        shadows={true}
        dpr={dpr}
        camera={{
          fov: 80,
          position: [10, -0.05, 10],
          zoom: 4
        }}>
        <fog attach="fog" color="white" near={1} far={55} />
        <AdaptiveDpr pixelated />
        <AdaptiveEvents />
        <Environment>
          <KitchenRoom />
          <CoffeePot />
          <CoffeeMug />
          <CoffeeMaker />
          <UpperCabinets />
          <LowerCabinetSink />
          <Fridge />
          <Stove />
          <Sink />
          <Preload />
        </Environment>
      </Canvas>
    </Suspense>
  );
}
