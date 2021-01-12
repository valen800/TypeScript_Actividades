let nFirst: number;
let nSecond: number;
let nThird: number;
let nFourth: number;
let nFifth: number;


function introduceNumber() {
    let n: number = parseInt(prompt("Introduce un número: "));

    if (isNaN(n) ) {
        return "Is not a number";
    }
    
    return n;
}

function greaterThanHundred(n: number) {
    if (n > 100) {
        return true;
    }

    return false;
}

// Make Array instead of add numbers
function addNumbers(n1: number, n2: number, n3: number, n4: number, n5: number) {
    let total = n1 + n2 + n3 + n4 + n5;

    return total;
}