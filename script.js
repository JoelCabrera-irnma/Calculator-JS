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
  //console.log(operator)
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

//Display muestra mas de un numero pero necesitamos arreglar el problema del almacenamiento en cada una de
//las variables numOne y numTwo
let digTx1 = []
let digTx2 = []
function getDisplay (e){
    let dig = +(e.srcElement.innerText)
    //console.log(typeof dig)
    if (!isNaN(dig)){
        if(operator === undefined){
        digTx1.push(dig)
        let jDigit = +digTx1.join('')
        document.querySelector('.display').textContent = jDigit
        numOne = jDigit
        console.log('olanda')
        console.log(typeof jDigit)
        }
        else {
            digTx2.push(dig)
            let jDigit = +digTx2.join('')
            document.querySelector('.display').textContent = jDigit
            numTwo = jDigit
            console.log('tomar por culo')
            }
        }
    else {
        console.log('a tu mama')}
} 

//console.log(operator)
