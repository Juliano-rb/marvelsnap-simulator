import IBoard from "./IBoard";
import { Dictionary } from "./IDictionary";

export default interface IBaseCondition {
  checkCondition(Board: IBoard, parameters: Dictionary): boolean;
}
