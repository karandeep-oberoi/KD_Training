//This class shall contain the APIs for the CRUD operations on a data. 
class EmployeeRepo{
    constructor() {
        this.employees = [];//initialized to blank array
        this.nextId = 1; //autogenerating the Ids
    }

    getAll = ()=>this.employees;
    
    create(emp){
        if(!emp.name || !emp.salary || !emp.address){
            throw new Error("Invalid Employee data");
        }
        const newObj = { ...emp, id: this.nextId++}
        this.employees.push(newObj);
        return newObj;
    }


}
module.exports = EmployeeRepo