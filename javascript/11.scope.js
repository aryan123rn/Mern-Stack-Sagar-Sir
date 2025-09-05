function scope2() {
    // console.log('scope 2', function_let);
    let x = 40;
    if (true) {
        let x = 30;
        if (true) {
            let y = 444;
        }
        // console.log(y)
    }
    // console.log (x)
}
// scope2();

let a = 20;

function funct1() {
    let a = 10;

    const func2 = () => {
        let a = 333;
    }
    func2();
    console.log(a);
}


//lexical scope

function lexical_scope() {
    let xx = 'parent let'

    function child() {
        let yy = 'child let'

        console.log(yy)
        console.log(xx)
    }
    child()
}

lexical_scope()

// Scope chaining
