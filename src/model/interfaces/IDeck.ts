export default interface IDeck {
    cards: ICard[]
    
    draw (): ICard
}