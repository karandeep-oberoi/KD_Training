const math = require("../jsfiles/mathModule")
//your MathMoudule is refered with an alias called math ...

describe('Math Module Test Spec', ()=>{
    it("Should add 2 numbers", ()=>{
        //Arrange
        const expected = 12;
        //Act
        const actual = math.addFn(4,8)
        //Assert
        expect(actual).toBe(expected)
    })

    it("Should sub 2 numbers", ()=>{
        //Arrange
        const expected = -4;
        //Act
        const actual = math.subFn(4,8)
        //Assert
        expect(actual).toBe(expected)
    })

    it("Should mul 2 numbers", ()=>{
        //Arrange
        const expected = 32;
        //Act
        const actual = math.mulFn(4,8)
        //Assert
        expect(actual).toBe(expected)
    })

    it("Should div 2 numbers", ()=>{
        //Arrange
        const expected = 0.5;
        //Act
        const actual = math.divFn(4,8)
        //Assert
        expect(actual).toBe(expected)
    })
})