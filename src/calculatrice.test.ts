import { Calculatrice } from "./calculatrice";

describe("La méthode eval()", () => {
  test("1 + 1 = 2", () => {
    expect(eval("1 + 1")).toBe(2);
  });
});

let calculatrice: Calculatrice;

beforeAll(() => {
  console.log("avant tous les test");
  calculatrice = new Calculatrice();
});

describe("Calculatrice", () => {
  describe("Addition", () => {
    it("1 + 1 ", () => {
      expect(calculatrice.calculer(" 1 + 1")).toBe(2);
    });
  });
  describe("division", () => {
    it("10/2", () => {
      expect(calculatrice.calculer("10/2")).toBe(5);
    });
    it("10/0",
      () => {
        expect(calculatrice.calculer("10/0")).toBe(Infinity);
      });
  });
});


