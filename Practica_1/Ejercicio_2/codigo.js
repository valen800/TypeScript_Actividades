var articlePrice = introduceNumber("Introduce el precio sin IVA");
var iva = introduceNumber("Introduce el IVA en porcetanje, ejemplo: 21");
var totalWithIVA = calculateTotalPrice(articlePrice, iva);
var ivaOfArticle = calculateIVAOfArticle(articlePrice, iva);
alert("Precio con IVA: " + totalWithIVA + " IVA del producto: " + ivaOfArticle);
function introduceNumber(msg) {
    var n = parseInt(prompt(msg));
    if (isNaN(n)) {
        return 0;
    }
    return n;
}
function calculateTotalPrice(price, iva) {
    var totalPrice = price * (1 + (iva / 100));
    return totalPrice;
}
function calculateIVAOfArticle(price, iva) {
    var ivaOfArticle = price * (iva / 100);
    return ivaOfArticle;
}
