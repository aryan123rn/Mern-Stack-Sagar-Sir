class Person {
    name;
    email;
    #password; //private
    constructor(name, email, password) {
        this.name = name;
        this.email = email;
        this.#password = password;
    }

    getName() {
        return this.name
    }
    changeName(name) {
        this.name = name
    }
    getPassword() {
        return this.#password // private call 
    }
}


const person = new Person('aryan', 'aryan@gmail.com', 'hahaha')
const person69 = new Person('ananda', 'ananda@gmail.com', 'ahahaha')

console.log(person)
console.log(person69)
// console.log(person.getName())
person.changeName("aryan dai")
// console.log(person.getName(person))
console.log('pass', person.getPassword())
console.log('pass', person69.getPassword())

//! inheritance

class Student extends Person {
    constructor(name, email, password, grade, faculty) {
        super(name, email, password)
        this.grade = grade
        this.faculty = faculty
    }
}

const student = new Student('hari', 'hari@gamil.com', '123456', 'B grade', 'BIT')

console.log(student)
console.log(student.getPassword())

//* Static
class Calculator {
    static add(a, b) {
        return a + b
    }
    static sub(a, b) {
        return a - b
    }
}
console.log(Calculator.add(9000, 1700))

//! abstruction

class MakeCoffee {
    constructor() { }
    start() {
        // turn_on_machine
        this.#turn_on_machine()
        this.#add_coffee()
        this.#add_sugar()
        console.log('coffee is ready')
    }

    #turn_on_machine() {
        console.log('turning on machine')
    }
    #add_coffee() {
        console.log('turning on machine')
    }
    #add_sugar() {
        console.log('turning on machine')
    }
}

const makemake_coffee = new MakeCoffee()
makemake_coffee.start()