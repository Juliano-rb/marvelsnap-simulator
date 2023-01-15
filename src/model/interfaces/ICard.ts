import ITrigger from "./ITrigger";

export default interface ICard {
  name: string;
  description: string;
  cost: number;
  power: number;

  actionTriggers: ITrigger[];
}
