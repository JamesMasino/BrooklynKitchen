import {
  CoffeeMug,
  /*CoffeePot, */
  Environment,
  Fridge,
  KitchenRoom,
  LowerCabinetSink,
  Sink,
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
        position: [10, 1, 12],
        zoom: 2.5
      }}>
      <Environment>
        <KitchenRoom />
        {/*<CoffeePot /> */}
        <CoffeeMug />
        <UpperCabinets />
        <LowerCabinetSink />
        <Fridge />
        <Sink />
      </Environment>
    </Canvas>
  );
}
