let userInp = "";

function add(num1, addOpe, num2) {
    let sum = 0;
    sum = parseInt(num1) + parseInt(num2);
    console.log(sum);
    displayResult(sum);
}

function subtract(num1, subOpe, num2) {
    return num1- num2;
}

function multiply(a, mulOpe, b) {
    return a*b;
}

function divide(a,divOpe,b) {
    return a/b;

}

function factorial(num) {

}

function operate(operator) {
    if (operator == "+") {
        let nums = userInp.split("+");
        add(nums[0], operator, nums[1]);
    }

    else if (operator == "-") {
        let nums = userInp.split("-");
        subtract(nums[0], operator, nums[1]);
    }

    else if (operator == "×") {
        let nums = userInp.split("×");
        multiply(nums[0], operator, nums[1]);
    }

    else if (operator == "÷") {
        let nums = userInp.split("÷");
        divide(nums[0], operator, nums[1]);
    }

    else if (operator == "!") {
        let num = userInp.split("!");
        factorial(num);
    }
}

function updateNum() {
}

const btn = document.querySelectorAll("button");
const box = document.querySelector("#box");
const clear = document.querySelector("#clear");
const equal = document.querySelector("#equal");

let operator = "";
btn.forEach(button => {
    if (button.textContent == "+" || button.textContent == "-" || button.textContent == "×" || button.textContent == "÷") {
        button.addEventListener("click", (event) => {
            display(button.textContent);})
            operator = button.textContent;
    }

    else if (button.textContent != "Clear" && button.textContent != "=") {
        button.addEventListener("click", (event) => {
            display(button.textContent); 
    });}
    console.log(operator)
});

clear.addEventListener("click", () => {
    userInp = "";
    box.innerHTML = "";
});


function display(input) {
    userInp += input;
    box.innerHTML = userInp;
}

function displayResult(result) {
    box.innerHTML = "";
    box.innerHTML = result;
    userInp = "";
}

equal.addEventListener("click", () =>
    operate(operator)
);
