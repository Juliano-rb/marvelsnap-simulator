import IAction from "./IAction";
import { IBaseCondition } from "./IBaseCondition";
import IBoard from "./IBoard";

export default interface ITrigger {
  baseCondition?: IBaseCondition;
  action: IAction;
  parameters: any;

  check(board: IBoard): boolean;
}

/**
 * Trigger
 *  condicao base: revelar, destruir, turno acabar, fim da partida
 *  parametros: lista
 */
