// 3 ways to create functions in js. Named functions, anonymous functions, Lambda functions or Arrow functions

function addFunc(first, second){
    return first + second
}




//anonymous functions

const subFunc = function(first, second)
{
    return first - second
}

//lambda functions

const mulFunc = (first, second)=> first * second;

//square root

const sqrt = (val) =>Math.sqrt(val)

//square 

const sqr = (val) => mulFunc(val, val)

const getFullName = function(...args)
{
    let fullname = ""
    for (const element of args)
    {
        fullname += element + " "
    }
    return fullname
}





let result = addFunc(10, 20)

console.log("Add Result is "+result)

result = subFunc(30, 10)

console.log("Sub Result is "+result)

result = mulFunc(15, 10)

console.log("Mul Result is "+result)

result = sqrt(225)

console.log("Square root of 225 is "+result)

result = sqr(12)

console.log("Square  of 12 is "+result)


result = getFullName("India", "is", "my", "country")

console.log(result)