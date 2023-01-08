import IAction from "./IAction"
import IDeck from "./IDeck"

export default interface IPlayer {
    name: string
    deck: IDeck

    doAction (action: IAction): void
}