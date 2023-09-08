const viewport = document.querySelector('.view-container')
let value = null;
let currentOperand = null
let previousOperand = null
function numberButtons() {
    const one = document.querySelector('.one-button')
    const two = document.querySelector('.two-button')
    const three = document.querySelector('.three-button')
    const four = document.querySelector('.four-button')
    const five = document.querySelector('.five-button')
    const six = document.querySelector('.six-button')
    const seven = document.querySelector('.seven-button')
    const eight = document.querySelector('.eight-button')
    const nine = document.querySelector('.nine-button')

    function buttonClick(){
        one.addEventListener('click', function(){
            viewport.textContent += 1
        })
        two.addEventListener('click', function(){
            viewport.textContent += 2
        })
        three.addEventListener('click', function(){
            viewport.textContent += 3
        })
        four.addEventListener('click', function(){
            viewport.textContent += 4
        })
        five.addEventListener('click', function(){
            viewport.textContent += 5
        })
        six.addEventListener('click', function(){
            viewport.textContent += 6
        })
        seven.addEventListener('click', function(){
            viewport.textContent += 7
        })
        eight.addEventListener('click', function(){
            viewport.textContent += 8
        })
        nine.addEventListener('click', function(){
            viewport.textContent += 9
        })
       
    } buttonClick();
}
numberButtons();
function operatorButtons() {
    const zero = document.querySelector('.zero-button')
    const equals = document.querySelector('.equals-button')
    const plus = document.querySelector('.plus-button')
    const minus = document.querySelector('.minus-button')
    const div = document.querySelector('.div-button')
    const mult = document.querySelector('.mult-button')
    const clear = document.querySelector('.clear-button')
  

    function buttonClick(){
        zero.addEventListener('click', function(){
            viewport.textContent += 0
        })
        equals.addEventListener('click', function(){
            viewport.textContent = '='
            compute()
        })
        plus.addEventListener('click', function(){
            viewport.textContent += '+'
        })
        minus.addEventListener('click', function(){
            viewport.textContent += '-'
        })
        div.addEventListener('click', function(){
            viewport.textContent += '/'
        })
        mult.addEventListener('click', function(){
            viewport.textContent += '*'
        })
        clear.addEventListener('click', function(){
            viewport.textContent = ""
            currentOperand = null
            previousOperand = null
            value = null
        }) 
    } buttonClick();
}
operatorButtons();
function compute() {
    
    
    switch (this.operation) {
        case '+':
            value = previousOperand + currentOperand
            break;
        case '-':
            value = currentOperand - previousOperand
            break;
        case '*':
            value = previousOperand * currentOperand
            break;
        case '/':
            value = previousOperand / currentOperand
            break;

    }

}