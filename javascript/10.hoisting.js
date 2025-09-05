//* behaviour of js moving variables or function declaration part to the top of the scope

// 1. memory creation phase (execution context)

// 2. execution phase 

// ! var
console.log(x) // undefined

var x = 10

console.log(x) // 10


// function declaration
greet() // Good morning

function greet() {
    console.log('Good morning')
}

greet() // Good morning


// ! let
//* hoisted but is in TDZ (temporal dead zone)
// console.log(y)

let y = 20

console.log(y)

//let z = 30

// ! const
//* hoisted but is in TDZ (temporal dead zone)
// console.log(z)

const z = 300

console.log(z)


//* functioni expression
console.log(func1)

func1()//typeError

var func1 = function () [
    console.log('var funcition')
]
 