import IBoard from "./IBoard";

export interface Dictionary {
  [Key: string]: any;
}

export default interface IAction {
  name: string;
  execute(board: IBoard, parameters: Dictionary): void;
}
