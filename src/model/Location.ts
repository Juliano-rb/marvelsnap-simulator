import { Card } from "./Card";

export class Location {
  name: string;
  description: string;
  image: string;
  actions: object[];
  cards: Card[];

  constructor(
    name: string,
    image: string,
    description: string,
    actions: object[]
  ) {
    this.name = name;
    this.description = description;
    this.image = image;
    this.cards = [];
    this.actions = actions;
  }
}
