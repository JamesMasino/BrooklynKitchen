import {
  /*CoffeeMug, */
  /*CoffeePot, */
  Environment,
  KitchenRoom,
  LowerCabinetSink,
  Sink
} from "@components";
import { Canvas } from "@react-three/fiber";
import { useWindowSize } from "@uidotdev/usehooks";

export default function App() {
  const { width, height } = useWindowSize();

  return (
    <Canvas shadows={true}>
      <Environment>
        <KitchenRoom />
        {/*<CoffeePot /> */}
        {/*<CoffeeMug /> */}
        <LowerCabinetSink />
        <Sink />
      </Environment>
    </Canvas>
  );
}
