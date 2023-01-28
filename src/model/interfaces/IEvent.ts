import ICard from "./ICard";

export type IEventAllFields = {
  type: string;
  location: Location;
  card: ICard;
  power: number;
};

export type IEvent = Partial<IEventAllFields>;
