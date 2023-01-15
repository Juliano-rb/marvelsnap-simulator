import IAction from "./IAction";
import IBoard from "./IBoard";
import ITrigger from "./ITrigger";

/**
 * ex: de eventos:
 *  - Jogar cartas
 *  - Revelar cartas
 *  - mover carta
 *  - Destruir carta
 *  - Turno acabar
 *
 * exemplo:
 *  quando mover (cartax, y local) -> destruir(cartax)
 *  quando revelar (cartax) -> adiciona(cartay, carta x.local)
 *  quando o turno acabar (cartax) -> cartax.power += turno.energia_restante
 *
 * fluxo:
 *  em cada unidade de tempo (terminar turno, mover carta, destruir carta...)
 *    - chamar checkTriggers onde faz um loop checando por condições nos triggers existentes.
 *    - quando acha um trigger cuja condição se satisfez, então pegar a ação cadastrada no trigger
 *      e mandar pro actionQueue pra ser executada na ordem correta
 */
export default interface IEventDispatcher {
  /**
   * @param trigger for combined Trigger, is possible to create a ComposedTrigger witch checks for multiple conditions
   */
  registerTrigger(trigger: ITrigger): void;
  removeTrigger(trigger: ITrigger): void;
  checkTriggers(board: IBoard): void;
}
