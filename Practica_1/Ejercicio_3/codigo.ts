let inputNumber1 = parseInt((document.getElementById("Inumber1Id") as HTMLInputElement).value);
let inputNumber2 = parseInt((document.getElementById("Inumber1Id") as HTMLInputElement).value);
let btn = document.getElementById("coolbutton");

alert(addInput(inputNumber1, inputNumber2));

function addInput(n1: number, n2: number) {
    let total = n1 + n2;

    return total;
}