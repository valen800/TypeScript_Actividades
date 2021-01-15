let totalAdd = 0;
let totalGreaterHundred = 0;
let nFirst: number = introduceNumber();
let nSecond: number = introduceNumber();
let nThird: number = introduceNumber();
let nFourth: number = introduceNumber();
let nFifth: number = introduceNumber();

let numbers: number[] = [nFirst, nSecond, nThird, nFourth, nFifth];

totalAdd = addNumbers(numbers);
totalGreaterHundred = greaterThanHundred(numbers);

alert("Mayores que 100: " + totalGreaterHundred + " || Total de la suma: " + totalAdd);

function introduceNumber() {
    let n: number = parseInt(prompt("Introduce un número: "));

    if (isNaN(n) ) {
        return 0;
    }
    
    return n;
}

function greaterThanHundred(listNumber: number[]) {
    let totalGreater = 0;

    listNumber.forEach(element => {
        if (element > 100) {
            totalGreater += 1;
        }
    });    

    return totalGreater;
}

function addNumbers(listNumber: number[]) {
    let total = 0;

    listNumber.forEach(element => {
        total += element;
    });

    return total;
}