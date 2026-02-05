let userInp = "";
let numInp= [];
let opeInp = [];




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



const btn = document.querySelectorAll("button");
const box = document.querySelector("#box");
const clear = document.querySelector("#clear");
const equal = document.querySelector("#equal");


let i = 0;

btn.forEach(button => {
      
    if (button.textContent == "0" || button.textContent == "1" || button.textContent == "2" || button.textContent == "3" || button.textContent == "4" || button.textContent == "5" || button.textContent == "6" || button.textContent == "7" || button.textContent == "8" || button.textContent == "9") {
        button.addEventListener("click", (event) => {
            display1(button.textContent); 
        })
    }


    if (button.textContent == "+" || button.textContent == "-" || button.textContent == "!" || button.textContent == "×" || button.textContent == "÷") {
         button.addEventListener("click", (event) => {
            display2(button.textContent); 
        })
    }

    if (button.textContent != "Clear" || button.textContent != "=") {
        button.addEventListener("click", (event) => {
            display(button.textContent); 
        })
        }
    
   
    });

clear.addEventListener("click", () => {
    userInp = "";
    box.innerHTML = "";
});


function display(input) {
    userInp += input;
    box.innerHTML = userInp;
}

let j = 0;
function display1(input) {
    numInp[j]= input;
    box.innerHTML = numInp;
    j++;
}

let k = 0;
function display3(input) {
    opeInpInp[k] = input;
    box.innerHTML = opeInp;
    k++;
}

function displayResult(result) {
    box.innerHTML = "";
    box.innerHTML = " Ans: " + result;
    userInp = "";
    userInp += result;
}

equal.addEventListener("click", () =>
    operate()
);

