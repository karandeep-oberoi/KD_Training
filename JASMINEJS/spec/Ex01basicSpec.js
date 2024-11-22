describe ("First example on unit testing", ()=>{
    //every test case will be provided by a it function.
    it("Should get hello world", ()=>{
        expect("Hello world").toBe("Hello world")
    })

    it("shall try numeric", ()=>{
        expect(2+5).toBe(7)
    })

    it ("Shall try for bool", ()=>{
        expect(true).toBeTrue()
        
    })
}) 