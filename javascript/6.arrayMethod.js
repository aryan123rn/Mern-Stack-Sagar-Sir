// ForEach

let numbers = [25, 69, 96]
console.log(numbers.lastIndexOf(53))

const res = numbers.forEach((value, index, array) => {
    console.log(value, index, array)
})

console.log(numbers)

//* MAP
const doubled = numbers.map((value, index, array) => {
    return value * 2
})

const doubles = numbers.map((value, index) => value + index)

console.log(doubled)
console.log(doubles)

//* filter

const even_numbers = numbers.filter((value) => {

    if (value % 2 == 0) {
        return value
    }


})

const odd_numbers = numbers.filter((value) => value % 2 !== 0)
console.log(odd_numbers)

//* Reduce

const sum = numbers.reduce((acc, val) => {

    return acc += val
}, 10)

console.log(numbers)
console.log(sum)

//* findIndex
//* find
const result = numbers.find((value) => {
    if (value > 50)
        return value
})

const index = numbers.findIndex((value) => {
    if (value > 50)
        return value
})

console.log(result, index)

//* Slice
const arr_copy = numbers.slice(1, 3)
console.log(arr_copy)


//* Splice
//* arr.splice ( start, delete_count, item1, item2, ......)

numbers.splice(2, 0, 65, 80, 6, 8)

console.log(numbers)




//* day 7

/* Static → Fixed content, same for everyone. Example: an HTML page with text and images that never change.
   Dynamic → Content changes based on user, time, or data from a database. Example: Facebook feed, where each user sees something different.

   Simple:
   Static = Always the same.
   Dynamic = Can change. */

const nums = [4, 5, 19, 69, 45, 36, 100, 10]
const users = ['biraj', 'aryan', 'aryak', 'sagar', 'govinda']

// sort
// arr_name.sort()
// map return array
users.sort((a, b) => { //compare logic
    return b.localeCompare(a)
})

// +ve -> swap
// -ve -> no swap
// 0 -> no swap
//[ 4,  5, 10,  19, 36, 45, 69, 100 ]

nums.sort((a, b) => {
    return a - b
})

console.log(users)
console.log(nums)


// reverse
// array_name.reverse()
nums.reverse()
console.log(nums) // ans in reverse[ 100, 69, 45, 36, 19, 10,  5,  4]

// some / every

const is_every_even = numbers.every((value) =>{
    return value % 2 === 0
})
const is_some_even = numbers.some((value) =>{
    return value % 2 === 0
})

console.log(is_every_even, is_some_even)


//* TASK

// 1. avg_marks = <- reduce
// 2. based on avg_marks > calculate score -> A, B, C
// 3. filter passed students -> filter
// 'Charlie-10-89.7-B'


// 1st map
// 2nd marks -> reduce
// 3rd if else or switch case -> score
// filter return object of past value
// map return string in last
