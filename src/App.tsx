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
import { AdaptiveDpr, Preload } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { useWindowSize } from "@uidotdev/usehooks";
import { Suspense, useState } from "react";

export default function App() {
  const { width, height } = useWindowSize();
  const [dpr, setDpr] = useState(1);

  return (
    <Suspense fallback={<div className="suspense"></div>}>
      <Canvas
        performance={{ min: 0.5 }}
        frameloop="demand"
        shadows={true}
        dpr={dpr}
        camera={{
          fov: 45,
          position: [10, 1, 11],
          zoom: 3.3
        }}>
        <Preload />
        <AdaptiveDpr />
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
        </Environment>
      </Canvas>
    </Suspense>
  );
}
