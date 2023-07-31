/*
    Explain how script works here

    On resume: Fix divide check in checkValidOp
    Add operator to use when op button is pressed
*/

//Runs when program loads
assignBtnListeners();

//Adds event listeners to all buttons
function assignBtnListeners(){
    const buttons = document.getElementsByClassName('button');

    //Future: add event listeners for keystrokes
    
    //Assign event listener to each node in nodelist
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', (evt) =>
            checkButtonPressed(buttons[i]));
    }
}

//Determines which button was pressed and how to proceed
function checkButtonPressed(button){
    //Determine button by id
    switch(button.id) {
        case 'btnEquals':
            operate();
            break;
        case 'btnClear':
            clearAll();
            break;
        case 'btnBackspace':
            backspace();
            break;
        case 'btnMultiply':
        case 'btnDivide':
        case 'btnSubtract':
        case 'btnAdd':
            let validOp = checkValidOperator() ? updateScreen(button) :
                invalidOp();
            break;
        default:
            updateScreen(button);
    }
}

//Updates the calculator screen
function updateScreen(button){
    const screenText = document.getElementById('screenText');
    const buttonText = button.textContent.toString();

    //Split each screen character into array
    let screenArr = screenText.innerText.split('');

    //Check if already a decimal point.
    if(buttonText === '.'){
        //Adds 0 if first character is a decimal
        if (screenText.innerText === ''){screenText.textContent = '0'}

        const alreadyDecimal = screenArr.find(char => char ===".");
        if (alreadyDecimal === undefined) {console.log()}
        else {return};
    }

    //Entry cannot begin with multiple 0s
    if(screenText.innerText === '0' && buttonText === '0') {
        return;
    }

    //Update the screen if max length is not exceded
    if(screenText.innerText.length < 12) {
        screenText.textContent += buttonText;
        //updateMemory(button);
    }
}

//Checks if most recent character is an operator to avoid invalid operators
function checkValidOperator(){
    //Split text into array
    const screenText = document.getElementById('screenText');
    let screenArr = screenText.innerText.split('');

    //Check last character entered to see if it was an operator or blank
    let lastItem = screenArr.slice(-1);
    if (screenText === '') {return false}
    if (lastItem == '+' ||
        lastItem == '-' ||
        lastItem == 'x' ||
        lastItem == '' ||
        lastItem === '÷') {
            return false;
        }
        else {return true;}
}

//Empty shell function for now
function invalidOp(){
    console.log('invalid operator!');
}

//Puts the text from screenText into an array
function putTextInArray(){
    const screenText = document.getElementById('screenText');

    //Split each screen character into array
    let screenArr = screenText.innerText.split('');
    return screenArr;
}

function updateMemory(button){
    
}

//Used to decide which operator to call
function operate(){
    let expression = putTextInArray();
    let newExpression = [];
    
    for (let i = 0; i <= expression.length+1; i++) {
        //If there is no i+1, exit the loop
        if (expression[i + 1] === undefined) {continue;}

        let a = expression[i];
        let b = expression[i+1];
        console.log(typeof(a));
        console.log(a.charCodeAt(0));
        if (a >= 48 && a <= 57 && b >= 48 && b <= 57) {
            newExpression.push(a+b);
        }
    }


    console.log(newExpression);
}

//Addition operator
function add(){

}

//Subtraction operator
function subtract(){

}

//Multiplication operator
function multiply(){

}

//Division operator
function divide(){

}

//Called if division by zero is attempted
function divideByZero(){

}

//Backspace button to delete most recent character
function backspace(){
    const screenText = document.getElementById('screenText');
    let screenContent = screenText.innerText.toString();
    screenText.textContent = screenContent.slice(0, -1);
}

//Clears all memory
function clearAll(){
    const screenText = document.getElementById('screenText');
    screenText.textContent = '';
}

//Round long numbers
function roundNumber(){

}

