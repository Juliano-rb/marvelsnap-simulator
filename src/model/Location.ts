import ILocation from "./interfaces/ILocation";

export class Location implements ILocation{
    name: string;
    description: string;
    image: string;
    actions: object[];

    constructor(name: string, image: string, description: string, actions: object[]){
        this.name = name;
        this.description = description;
        this.image = image;
        this.actions = actions;
    }

}