import { Trigger } from "./Trigger";

export class Card {
  name: string;
  description: string;
  cost: number;
  power: number;
  actionTriggers: Trigger[];

  constructor(
    name: string,
    description: string,
    cost: number,
    power: number,
    actionTriggers: Trigger[]
  ) {
    this.name = name;
    this.description = description;
    this.cost = cost;
    this.power = power;

    this.actionTriggers = actionTriggers;
  }
}
