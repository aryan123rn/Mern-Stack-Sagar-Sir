// closure

function counter() {
    let count = 0

    return function child() {
        count += 1
        console.log(count)
    }
}

const count = counter() // create closure
const count1 = counter() // create closure

count()
count()
count()
count()
count()
count() //6
count1() //1



function counter11(val=0) {
    let counts = 0;
    return {
        increment: function() {
            counts += 1
            console.log(counts)
        },
        decrement: function() {
            counts -= 1
            console.log(counts)
        },
        decrement: function() {
            counts = 0
            console.log(counts)
        }
    }
}

// closure
const counter1 = counter11(10)
// const counter2 = counter22()
counter1.increment()
counter1.increment()
counter1.increment() //3
counter1.decrement() //2
// counter1.reset()
 

// Account (acc_name, initail_amt)
//Balance, acc_name as a closure
// deposit(amt), withdraw, balance_inquiry, get_detail
