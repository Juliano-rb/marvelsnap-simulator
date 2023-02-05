import IAction from "./interfaces/IAction";
import IDeck from "./interfaces/IDeck";

export class Player {
  name: string;
  deck: IDeck;

  constructor(name: string, deck: any) {
    this.name = name;
    this.deck = deck;
  }

  doAction(action: IAction): void {
    throw new Error("Method not implemented.");
  }
}
