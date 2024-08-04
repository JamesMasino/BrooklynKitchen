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
import { Canvas } from "@react-three/fiber";
import { useWindowSize } from "@uidotdev/usehooks";

export default function App() {
  const { width, height } = useWindowSize();

  return (
    <Canvas
      shadows={true}
      camera={{
        fov: 45,
        position: [10, 1, 11],
        zoom: 3.3
      }}>
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
  );
}
