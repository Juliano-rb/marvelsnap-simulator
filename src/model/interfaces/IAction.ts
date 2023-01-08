import IBoard from "./IBoard";

export default interface IAction {
  name: string;
  execute(board: IBoard, parameters: IActionPayload): void;
}
