//Example for understanding Lists or Array in JS
const fruits = ["Apple","Mangoes","Oranges", "PineApples"]
console.log(fruits + "DT of fruits : "+typeof(fruits))

//iterate(Access one at a time) through the fruits 



for (let index = 0; index < fruits.length; index++) {
    console.log(`Fruit Name: ${fruits[index]} at the index ${index}`);
    
}

for(const fruit of fruits)
{
    console.log(fruit);
}
console.log("***************************************")
fruits.push("Watermelon") //Add the element to the bottom

fruits.unshift("Yellakki") // Adds to the beginning of the list

fruits.splice(2,1, "Alphonso" )

for(const fruit of fruits) 
{
    console.log(fruit)
}
console.log(fruits)

