//* Function

// block {}

//* syntax
// function function_name () {
//     function body
// }

// function greet () {
//     console.log ('Good morning')
// }


//? argument & parameter
//* with input

function greet(name) {
    console.log('Good morning', name)
}

greet('Aryan') // Aryan
greet('Ananda') // Ananda

// multiple inputs
//add ->

function add(firstName, lastName) {
    console.log("Good morning", firstName, lastName);
}

add("Aryan", "Maharjan");
add("Ananda", "Shrestha");

// multiple inputs
//add ->


//* return type
function add(a, b) {
    return a + b
}

const result = add(10, 13)
console.log('result', result)

const sum = add(69, 31)
console.log('sum', sum)



//* Default parameter
function sayHi(name = "Everyone") {
    console.log('Hi morning', name)
}

sayHi("Aryan")
sayHi()

// prob solve
function multiply(a, b = 1) {
    return a * b
}

const ans = multiply(10)
console.log( ans)


//* B.function expression
let mult = function (a, b) {
    return a * b
}

console.log(mult(10,3))

//* arrow function

const square = (num) => {
    return num * num
}

const square2 = num => num * num 

console.log("square", square(10), square2 (10))


//* call function
const child = function (name){
    console.log("child", name)
}

const parent = function (callback){
    console.log ("parent")
    callback("john")
}

parent (child)

parent (function(name){
    console.log('anonymous')
    console.log(name)
})

parent ((name)=>{
    console.log('anonymous')
    console.log(name)
})

// find max of 3 numbers with 3 inputs taking
//reverse string
//fibonci series 