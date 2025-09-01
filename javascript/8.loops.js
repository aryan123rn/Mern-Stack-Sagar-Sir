//* loops 

//* while

// let i = 0
// while (i < 10) {
//     console.log(i);
//     i++
// }

//* do- while
// let count = 10
// do {
//     console.log(count)
//     count++
// } while (count < 10)


//* for loop

// for (initialization; condition; increment){
//     body
// }

// for (let i = 1; 1 < 10; i++) {
//     console.log(i)
// }

// let user = {
//     name: 'abc',
//     email: 'abc@gmail.com',
//     password: '123456',
// }

// let numbers = [1, 2, 3, 45, 69]

// for in
// for (let key in user) {
//     console.log(key, user[key])
// }

// for (key in numbers) {
//     console.log(key)
// }


// for of
// for (value of numbers) {
//     console.log(value)
// }

// for (value of "numbers") {
//     console.log(value)
// }

// //! TYpeError: user is not terable
// for (value of user) {
//     console.log(value)
// }


// control transfer statements / 

//break 
// for ( let i= 1 ; i< 10 ; i++){
//     if (i===6) {
//         break;
//     }
//console.log(i)
// }

//continue 
for (let i = 1; i < 10; i++) {
    if (i === 6) {
        continue;
    }
    console.log(i)
}

// print odd number
for (let i = 1; i < 10; i++) {
    if (i % 2 == 0) {
        continue;
    }
    console.log("odd Number", i)
}

for (let i = 0; i < 10; i++) {
    if (i % 2 != 0) {
        continue;
    }
    console.log( i)
}


