let uname = "Karan"
let age = 34
let salary = 60000

let userInfo = {uname, age, salary} //singleton object

console.log("The details are as :\n Name : "+uname+"\n Age : "+age+"\n Salary : "+salary)
console.log("DT of uname :"+ typeof(uname))
console.log("DT of age :"+typeof(age))
console.log("DT of salary :"+typeof(salary))
console.log("DT of userInfo :"+typeof(userInfo))

age = parseInt(prompt("Enter the age"))
salary = parseFloat(prompt("Enter the salary"))
//todo: check whether the value entered is a valid number only then add else show an error age is invalid


console.log("The age after 12 years is "+(age+12) )
console.log("Salary entered is "+salary)
