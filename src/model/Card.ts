import IActionTrigger from "./interfaces/ITrigger";
import ICard from "./interfaces/ICard";

export class Card implements ICard {
  name: string;
  description: string;
  cost: number;
  power: number;
  actionTriggers: IActionTrigger[];

  constructor(
    name: string,
    description: string,
    cost: number,
    power: number,
    actionTriggers: IActionTrigger[]
  ) {
    this.name = name;
    this.description = description;
    this.cost = cost;
    this.power = power;

    this.actionTriggers = actionTriggers;
  }
}
