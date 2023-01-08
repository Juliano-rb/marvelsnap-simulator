import { Location } from "../model/Location";
import ILocation from "../model/interfaces/ILocation";

export class LocationBuilder {
  private readonly _location: ILocation;
  constructor() {
    const locationName = "Location " + Math.floor(Math.random() * 100);

    this._location = new Location(
      locationName,
      "😎",
      "location" + locationName + " description",
      []
    );
  }

  build() {
    return this._location;
  }
}
