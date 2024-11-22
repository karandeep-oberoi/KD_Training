//Test cases for the Crud operations of Employee Repo
const EmployeeRepo = require('../Jsfiles/Repocrud.js');

describe('Employee Repo Test Suite', () => {
    let repo; //create an object

    beforeEach(()=> repo = new EmployeeRepo())

    describe('create Test Specs', () => {
        it("should add employee and return it", ()=>{
            //arrange
            const emp = { name : "Phaniraj", address : "Bangalore", salary : 40000}
            //act
            const result = repo.create(emp)
            //assert
            expect(result).toEqual(jasmine.objectContaining({ name : "Phaniraj", address : "Bangalore", salary : 40000, id : 1}));
            expect(repo.employees.length).toBe(1)
        })

        it("should throw an exception ", ()=>{
            //arrange
            const emp = { name : "Phaniraj", empaddress : "Bangalore", salary : 40000}
            //act
            
            //assert
            
            expect(repo.employees.length).toBe(1)
        })
    })
})