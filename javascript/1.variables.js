//* VARIABLES AND DATA TYPES

//console.log ("My first console print");
console.log(2 + 3) // how to use variable in future??



// variable = name of a container/ memory space and to excess variable in future

//* method to declare variable
//var let const = this doesn't define data type its define its behavior

//* var
var a = 6
//var = method, a = variable, 10 = value
a = 7
var a = 'hello'
// var can redeclare and  reassign its value to 20
console.log(a) // ans = 25

//*  let
let b = 9
b = 10
// let b = 11 cannot redeclare block-scoped variable 'b'
// let can cannot redeclare with same variable name but can reassign its value to 20 
console.log(b) // ans = 10

//*  const
const c = 11 // const declaration and assign its value must be compulsory
// c = 12  cannot redeclare and reassigned
console.log(c)

// single threaded = can perform  only one task at one time and cannot perform multiple task
// interpreted = top to bottom and left to right executed line by line
// dynamic typed = no need to give datatype of variable

let d, e
//* Data types
//primitive
//* number
let f = 12
let g = 12.69
console.log(f, g)

//* string (' ' , " ")
let h = "Good Morning" // line must be in single line while using single or double quote
let i = `Good evening` // line can be multiple line while using back tick
const j = `Good night
 and have
a swt dream` // use for dynamic data also
const k = 'Aryan'
let l = `hello, Good morning ${k}`
console.log(h)
console.log(i)
console.log(j)
console.log(k)
console.log(l)

//* boolean
let m = true
let n = false
// boolean is used in condion statement

// undefine = variable declare but variable not define 
let o
console.log(o)

// null = empty value
let p = null
console.log(p)

// undefine and null is not used by developer but by javascript computer


// what is hosting?
// what is scope?

