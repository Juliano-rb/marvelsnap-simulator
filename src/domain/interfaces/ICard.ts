import IActionTrigger from "./IActionTrigger"

export default interface ICard {
    name: string
    description: string
    cost: number
    power: number

    actions: IActionTrigger[]
}