import {
  beforeAll,
  beforeEach,
  describe,
  expect,
  it,
  vitest,
  afterAll,
  SpyInstance,
} from "vitest";
import * as utils from "./utils";

describe("Builder's utils", () => {
  const mockedMathRandomValue = 0.523;
  describe("randInter", () => {
    beforeAll(() => {
      vitest.spyOn(Math, "random").mockReturnValue(mockedMathRandomValue);
    });

    afterAll(() => {
      vitest.restoreAllMocks();
    });

    it(
      "should generate number 5 when called with (0,10) and Math.random returns " +
        mockedMathRandomValue,
      () => {
        const randIntGenerated = utils.randInteger(0, 10);
        expect(randIntGenerated).toBe(5);
      }
    );

    it(
      "should generate number 52 when called with (0,1000) and Math.random returns " +
        mockedMathRandomValue,
      () => {
        const randIntGenerated = utils.randInteger(0, 1000);
        expect(randIntGenerated).toBe(523);
      }
    );
  });

  describe("randCharacter", () => {
    const charaterInteger = 65;
    const characterString = "A";
    let randIntegerMock: SpyInstance;

    beforeEach(() => {
      if (randIntegerMock) randIntegerMock.mockClear();
      randIntegerMock = vitest
        .spyOn(utils, "randInteger")
        .mockImplementation(() => charaterInteger);
    });

    afterAll(() => {
      vitest.restoreAllMocks();
    });

    it("should call randInteger with correct ASCII decimal interval", () => {
      const ASCIILetterA = 65;
      const ASCIILetterZ = 90;

      utils.randCharacter();
      expect(randIntegerMock).toHaveBeenCalledWith(ASCIILetterA, ASCIILetterZ);
    });

    it(`should return character ${characterString} when randInteger returns ${charaterInteger}`, () => {
      expect(utils.randCharacter()).toBe(characterString);
    });
  });

  describe("randString", () => {
    const randCharacterReturns = "A";
    const stringSize = 4;
    const expectedRandString = "AAAA";
    let randCharacterMock: SpyInstance;

    beforeEach(() => {
      if (randCharacterMock) randCharacterMock.mockClear();
      randCharacterMock = vitest
        .spyOn(utils, "randCharacter")
        .mockImplementation(() => randCharacterReturns);
    });

    it(`should call randCharacter ${stringSize} times`, () => {
      utils.randString(stringSize);

      expect(randCharacterMock).toHaveBeenCalledTimes(stringSize);
    });

    it(`should return string ${expectedRandString} when randInteger returns only ${randCharacterReturns} and stringSize = ${stringSize}`, () => {
      expect(utils.randString(stringSize)).toBe(expectedRandString);
    });
  });
});
