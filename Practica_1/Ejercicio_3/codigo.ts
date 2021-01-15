window.onload = () => {
    let inputNumber1 = (document.getElementById("Inumber1Id") as HTMLInputElement);
    let inputNumber2 = (document.getElementById("Inumber2Id") as HTMLInputElement);
    let form:HTMLFormElement = document.getElementById("formId") as HTMLFormElement;

    console.log("fuera onclick");
        
    form.onsubmit = () => {
        let input = document.createElement("input");
        let total = addInput(parseInt(inputNumber1.value), parseInt(inputNumber2.value));
        input.setAttribute("type", "text");
        input.setAttribute("type", total);
        input.setAttribute("name", "inputResult");
        form.appendChild(input);
    };
}


function addInput(n1: number, n2: number) {
    let total = n1 + n2;

    return String(total);
}