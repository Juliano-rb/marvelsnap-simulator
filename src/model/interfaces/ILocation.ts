import ICard from "./ICard";

export default interface ILocation {
  name: string;
  description: string;
  image: string;
  cards: ICard[];
  actions: object[];
}
