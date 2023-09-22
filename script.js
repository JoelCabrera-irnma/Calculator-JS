let numOne 
let numTwo 
let operator 


function suma(a,b){
    return a + b
}

function resta(a,b){
    return a - b 
}

function multiplicacion(a,b){
    return a * b 
}

function division(a,b){
    return a / b 
}

console.log(multiplicacion(30,5))

function operate (operator,one,two){
    if (operator=='+'){
        suma(one,two)
    }
    if (operator=='-'){
        resta(one,two)
    }
}

const digits = document.querySelectorAll('.digit').forEach(digit => {
    digit.addEventListener('click',getDisplay)
});

function getDisplay (e){
    let digitTx = e.srcElement.innerText
    document.querySelector('.display').textContent = digitTx
} 