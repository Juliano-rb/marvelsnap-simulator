import IAction from "./IAction";
import IBaseCondition from "./IBaseCondition";
import IBoard from "./IBoard";
import { Dictionary } from "./IDictionary";

/**
 * Trigger
 *  action: PlaceCard, Destroy, ...
 *  condicao base: revelar, destruir, turno acabar, fim da partida
 *  parametros: dicionario
 */

export default interface ITrigger {
  action: IAction;
  parameters: Dictionary;
  baseCondition?: IBaseCondition;

  check(board: IBoard): boolean;
}
