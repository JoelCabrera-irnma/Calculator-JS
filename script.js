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

document.querySelectorAll('.op').forEach(op => {
    op.addEventListener('click',(e)=>{
        let op = e.target.innerText
        switch(op){
            case '+': 
                operator = op;
                break;
            case '-': 
                operator = op;
                break;
            case '*': 
                operator = op;
                break;
            case '/': 
                operator = op;
                break;
        }
  console.log(operator)
    })
});

document.querySelector('.igual').addEventListener('click',operate);
//console.log()
function operate (){
    if (operator==='+'){
        let result = suma(numOne,numTwo)
        console.log(result)
        document.querySelector('.display').textContent = result
        return result
    }
    if (operator==='-'){
        let result = resta(numOne,numTwo)
        console.log(result)
        document.querySelector('.display').textContent = result
        return result
    }
    if (operator=='*'){
        let result = multiplicacion(numOne,numTwo)
        console.log(result)
        document.querySelector('.display').textContent = result
        return result
    }
    if (operator=='/'){
        let result = division(numOne,numTwo)
        console.log(result)
        document.querySelector('.display').textContent = result
        return result
    }
}

const digits = document.querySelectorAll('.digit').forEach(digit => {
    digit.addEventListener('click',getDisplay)
});

let digitTx = []
function getDisplay (e){
    let digito = e.srcElement.innerText
    digitTx.push(digito)
    let jDigit = +digitTx.join('')
    document.querySelector('.display').textContent = jDigit
    if(!numOne) {numOne = jDigit}
    else{numTwo = jDigit}
    console.log(jDigit)
    console.log(jDigit)
} 

