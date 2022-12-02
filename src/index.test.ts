import bonjour from ".";

describe("je test la bonjour", () => {
    it("should return 'Bonjour'", () => {
        expect(bonjour()).toBe("Bonjour");
    });
});
