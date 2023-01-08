import IAction from "./IAction"
import ILocation from "./ILocation"
import IPlayer from "./IPlayer"

export default interface IBoard {
    players: IPlayer[]
    turnOf: IPlayer
    locations: ILocation[]

    executeAction (action: IAction): void
}