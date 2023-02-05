import { Card } from "../Card";

export type IEventAllFields = {
  type: string;
  location: Location;
  card: Card;
  power: number;
};

export type IEvent = Partial<IEventAllFields>;
