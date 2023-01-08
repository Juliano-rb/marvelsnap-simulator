import IAction from "./IAction"
import IBoard from "./IBoard"

export default interface ILocation {
    execute(board: IBoard): void
    actions: IAction[]

    register(eventsPublisher: IEventHandler): void
    trigger(board: IBoard): void
}