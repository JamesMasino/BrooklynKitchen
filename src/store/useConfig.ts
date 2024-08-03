import { Vector3Props } from "@react-three/fiber";
import { create } from "zustand";
import config from "./config.json";
interface ILevaConfig {
  [key: string]:
    | {
        label?: string;
        value?: boolean | number | string | number[] | Vector3Props;
        step?: number;
      }
    | (ILevaConfig & { Collapsed?: boolean });
}

export interface IConfigStore {
  Authors: string[];
  KitchenRoom: ILevaConfig;
  CoffeePot: ILevaConfig;
  CoffeeMug: ILevaConfig;
  UpperCabinets: ILevaConfig;
  LowerCabinetSink: ILevaConfig;
  Fridge: ILevaConfig;
  Sink: ILevaConfig;
  Environment: ILevaConfig;
  Vessel: ILevaConfig;
}

export const useConfig = create<IConfigStore>(set => ({
  Authors: config.Authors,
  KitchenRoom: config.KitchenRoom,
  CoffeePot: config.CoffeePot,
  CoffeeMug: config.CoffeeMug,
  UpperCabinets: config.UpperCabinets,
  LowerCabinetSink: config.LowerCabinetSink,
  Fridge: config.Fridge,
  Sink: config.Sink,
  Environment: config.Environment,
  Vessel: config.Vessel
}));
