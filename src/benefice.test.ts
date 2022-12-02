import { benefice } from "./benefice"

describe("Benefice", () => {
    const log = jest.spyOn(global.console,"log")
    test("Je test mon benefice de deux dollars",()=>{
        benefice(18,20)
        expect(log.mock.calls).toContainEqual(['Gain de 2$'])
    })
    test("When: j'ai une perte de 2 dollars",()=> {
        benefice(20,18);
        expect(log.mock.calls).toContainEqual(["Perte de 2$"])
    })

})