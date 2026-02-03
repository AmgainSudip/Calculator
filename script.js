let userInp = "";

function add(array) {
    let new_arr = array.filter(item => item !== "+");
    let sum = 0;

    for (let i = 0; i< new_arr.length; i++) {
        sum += parseFloat(new_arr[i]);
    }
    displayResult(sum);
}

function subtract(array) {
    let new_arr = array.filter(item => item !== "-");
    let sub = new_arr[0];

    for (let i = 1; i< new_arr.length; i++) {
        sub -= parseFloat(new_arr[i]);
    }
    displayResult(sub);
}


function multiply(array) {
    let new_arr = array.filter(item => item !== "×");
    let mult = 1;

    for (let i = 0; i< new_arr.length; i++) {
        mult = mult * parseFloat(new_arr[i]);
    }
     displayResult(mult);
}

function divide(array) {
    let new_arr = array.filter(item => item !== "÷");
    let divide = new_arr[0]; 

    for (let i = 1; i< new_arr.length; i++) {
        divide = divide / parseFloat(new_arr[i]);
    }

    displayResult(divide);

}

function factorial(num) {
    let a = num[0];
    let fact = num[0];

    if (a == 0) {
        fact = 1;
    }
    
    else {
        for(let i=0; i < num[0]; i++) {
            if (a > 1) {
                fact = fact*(a-1);
                a--;
            }
        }
    }
    console.log(fact);
    displayResult(fact);
}

let operator = "";
function operate() {
        
     if (userInp.includes("×")) {
        let nums = userInp.split("×");
        for (let i= 0; i < nums.length; i++) {
            multiply(nums);
        }
        operator += "";
    }
    
     if (userInp.includes("÷")) {
        let nums = userInp.split("÷");
        for (let i= 0; i < nums.length; i++) {
            divide(nums);
        }
        operator += "";
    }
    
     if (userInp.includes("!")) {
        let nums = userInp.split("!");
        for (let i= 0; i < nums.length; i++) {
            factorial(nums);
        }
        operator += "";
    }
        
    if (userInp.includes("+")) {
        let nums = userInp.split("+");
        for (let i= 0; i < nums.length; i++) {
            add(nums);
        }
        operator += "";
    }

    if (userInp.includes("-")) {
        let nums = userInp.split("-");
        for (let i= 0; i < nums.length; i++) {
            subtract(nums);
        }
        operator += "";
    }

    if (userInp.includes("(")) {
        let nums = userInp.split("(");
        let new_arr = nums.filter(item => item !== "(");
    }

    if (userInp.includes(")")) {
        let nums = userInp.split(")");
        let new_arr = nums.filter(item => item !== ")");
    }

}

function updateNum() {
}

const btn = document.querySelectorAll("button");
const box = document.querySelector("#box");
const clear = document.querySelector("#clear");
const equal = document.querySelector("#equal");


let i = 0;

btn.forEach(button => {
   if (button.textContent != "Clear" && button.textContent != "=") {
        button.addEventListener("click", (event) => {
            display(button.textContent); 
        })
        }});

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
    operate()
);
