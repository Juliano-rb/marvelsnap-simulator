import * as self from "./utils";

export function randInteger(min: number = 0, max: number = 100) {
  return Math.floor(Math.random() * (max - min) + min);
}

export function randCharacter() {
  const number = self.randInteger(65, 90);
  return String.fromCharCode(number);
}

export function randString(size: number = 10) {
  let generatedString = "";
  for (let characterNumber = 0; characterNumber < size; characterNumber++) {
    generatedString += self.randCharacter();
  }

  return generatedString;
}
