// This is the new syntax in ES 6 syntax

class Person {

    constructor(name, age, gender){
        this.name = name;
        this.age = age;
        this.gender = gender;
    }

    getInfo()
    {
        return `${this.name} is aged ${this.age} and is ${this.gender}`
    }
}

let p1 = new Person("Leonard", 29, "Male")

console.log(p1)

console.log(p1.getInfo());



