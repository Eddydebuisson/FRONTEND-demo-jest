import Bonjour from "./bonjour";

describe("Test de bonjour", () => {
  test("doit dire bonjour", () => {
    const log = jest.spyOn(global.console, "log");
    const bonjour = new Bonjour();
    bonjour.bonjour("Eddy");

    expect(log.mock.calls).toContainEqual(["Bonjour Eddy"]);
  });
});
