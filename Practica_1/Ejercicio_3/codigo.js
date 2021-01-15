window.onload = function () {
    var inputNumber1 = document.getElementById("Inumber1Id");
    var inputNumber2 = document.getElementById("Inumber2Id");
    var form = document.getElementById("formId");
    console.log("fuera onclick");
    form.onsubmit = function () {
        var input = document.createElement("input");
        var total = addInput(parseInt(inputNumber1.value), parseInt(inputNumber2.value));
        input.setAttribute("type", "text");
        input.setAttribute("type", total);
        input.setAttribute("name", "inputResult");
        form.appendChild(input);
    };
};
function addInput(n1, n2) {
    var total = n1 + n2;
    return String(total);
}
