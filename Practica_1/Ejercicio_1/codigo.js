var totalAdd = 0;
var totalGreaterHundred = 0;
var nFirst = introduceNumber();
var nSecond = introduceNumber();
var nThird = introduceNumber();
var nFourth = introduceNumber();
var nFifth = introduceNumber();
var numbers = [nFirst, nSecond, nThird, nFourth, nFifth];
totalAdd = addNumbers(numbers);
totalGreaterHundred = greaterThanHundred(numbers);
alert("Mayores que 100: " + totalGreaterHundred + " || Total de la suma: " + totalAdd);
function introduceNumber() {
    var n = parseInt(prompt("Introduce un número: "));
    if (isNaN(n)) {
        return 0;
    }
    return n;
}
function greaterThanHundred(listNumber) {
    var totalGreater = 0;
    listNumber.forEach(function (element) {
        if (element > 100) {
            totalGreater += 1;
        }
    });
    return totalGreater;
}
function addNumbers(listNumber) {
    var total = 0;
    listNumber.forEach(function (element) {
        total += element;
    });
    return total;
}
