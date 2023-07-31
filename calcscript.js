/*
    Explain how script works here

    On resume: Fix divide check in checkValidOp
    Add operator to use when op button is pressed
*/

//Runs when program loads
assignBtnListeners();

//Blank numbers
let nums = [''];

//Blank operators
let operators = [];

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

//Creates multiple digit numbers
function combineNums(buttonText){
    switch (operators.length) {
        case 5:
            nums[5] += buttonText;
            break;
        case 4:
            nums[4] += buttonText;
            break;
        case 3:
            nums[3] += buttonText;
            break;
        case 2:
            nums[2] += buttonText;
            break;
        case 1:
            nums[1] += buttonText;
            break;
        case 0:
            nums[0] += buttonText;
            break;
    }
    console.log(nums);
}

function setOperators(button){
    console.log(operators.length);
    switch (operators.length) {
        case 0:
            nums.push('');
            operators.push(button.id);
            break;
        case 1:
            nums.push('');
            operators.push(button.id);
            break;
        case 2:
            nums.push('');
            operators.push(button.id);
            break;
        case 3:
            nums.push('');
            operators.push(button.id);
            break;
        case 4:
            nums.push('');
            operators.push(button.id);
            break;
        case 5:
            nums.push('');
            operators.push(button.id);
            break;
    }
    console.log(operators);
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

    //Screen cannot have more than 12 entries
    if(screenText.innerText.length >= 12) {
        return;
    }

    //Update the screen if all tests have passed
    screenText.textContent += buttonText;

    //If the entry is a number, combine it to previous numbers
    if(buttonText >= 0 && buttonText <= 9) {
        combineNums(buttonText);
    }
    else if(button.id === 'btnDecimal') {
        combineNums(buttonText);
    }
    //Determines operator
    else {
        setOperators(button);
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
        lastItem == '.' ||
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

//Used to decide which operator to call
function operate(){

    for (let i=0; i <= nums.length -1; i++) {
        if(operators[i] === undefined) {
            console.log(nums[i]);
        }
        else {
            console.log(nums[i] + operators[i]);
        }
    }
}

//Addition operator
function add(a,b){

}

//Subtraction operator
function subtract(a,b){

}

//Multiplication operator
function multiply(a,b){

}

//Division operator
function divide(a,b){

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

