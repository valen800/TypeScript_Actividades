let articlePrice: number = introduceNumber("Introduce el precio sin IVA");
let iva: number = introduceNumber("Introduce el IVA en porcetanje, ejemplo: 21");

let totalWithIVA = calculateTotalPrice(articlePrice, iva);
let ivaOfArticle = calculateIVAOfArticle(articlePrice, iva);

alert("Precio con IVA: " + totalWithIVA + " IVA del producto: " + ivaOfArticle);

function introduceNumber(msg: string) {
    let n: number = parseInt(prompt(msg));

    if (isNaN(n) ) {
        return 0;
    }
    
    return n;
}

function calculateTotalPrice(price: number, iva: number) {
    let totalPrice = price * (1 + (iva/100));
    return totalPrice;
}

function calculateIVAOfArticle(price: number, iva: number) {
    let ivaOfArticle = price * (iva/100);

    return ivaOfArticle;
}
