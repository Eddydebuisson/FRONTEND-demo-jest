import { lePlusGrandNombreAvecTroisNombre } from "./lePlusGrandNombre"

describe("le plus grand nombre",()=> {
    it("When:Le premier argument et le plus grand",()=>{

        expect(lePlusGrandNombreAvecTroisNombre(1254,3,4)).toBe("Le plus grand nombre est 1254")
    })
})