//3 syntax for creating classes and ojbects.
//old syntax called singleton objects where we can create objects on the fly without any class declarations.

const emp = {

    empID : 123, empName : "Karan Deep", empAddress : "Bengaluru", empSalary : 56000
}

emp.gender = "Male" // This shall add a new property, if the property is already set, it shall change its value.

const emp2 = emp;

emp2.empAddress = "CV RAMAN NAGAR, BENGALURU"

console.log(emp)

console.log(`Name is ${emp.empName} from ${emp.empAddress} earning a salary of Rs. ${emp.empSalary}`)

console.log(`DT of emp is ${typeof(emp)}`)

for(property in emp)
{

    console.log(`Propertyname : ${property}, Value : ${emp[property]}`)
}


// old way of creating classes which look like functions 


const empRecord = function (id, name, address, salary)
{

    this.empID =  id;
    this.empName = name;
    this.empSalary = salary;
    this.empAddress = address;

    this.getAllInfo= function(){
        return `Name: ${this.empName}, Address: ${this.empAddress}, Salary: ${this.empSalary}`
    }
}


const id = parseInt(prompt("Enter the ID"))
const name = prompt("Enter the name")
const address = prompt("Enter the address")
const salary = parseInt(prompt("Enter the salary"))
const e1 = new empRecord(id, name, address, salary)

console.log(e1)


const empList = [];
for (let index = 0; index < 2; index++) {
    const id = parseInt(prompt("Enter the Id"))
    const name = prompt("Enter the Name")
    const address = prompt("Enter the Address")
    const salary = parseInt(prompt("Enter the Salary"))
    const e1 = new empRecord(id, name, address, salary)
    empList.push(e1)   //adds the element to the list.  
}

console.log("Now read all of them............");
for (rec of empList)
    console.log(rec.getAllInfo());