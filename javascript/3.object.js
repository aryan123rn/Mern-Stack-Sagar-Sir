let mern = {
    mongotv : "database",
    express : "framework",
    React : "front-end"
    // node : "run time environment"
}

//adding properties
mern.node = "run time environment"


//dot notation
const mern_mongotv = 'express'
console.log(mern.express)
console.log(mern

)
console.log(mern['express'])


// console.log(person.hasOwnProperty('age'))

if(!person.hasOwnProperty('age')){
    person.age =30
}

//
console.log(person)

//
console.log(Object.keys(person))
console.log(Object.values(person))
console.log(Object.entries(person)) // [ {name, xyz] ,[]}


const entries = Object.entries(person)
console.log(entries)
console.log(Object.fromEntries(entries))