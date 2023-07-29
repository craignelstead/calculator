/*
    Explain how script works here
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
            let valid = checkValidExpression() ? operate() : invalidExpression();
            break;
        case 'btnClear':
            clearAll();
            break;
        case 'btnBackspace':
            backspace();
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
        if (alreadyDecimal === undefined) {console.log(alreadyDecimal)}
        else {return};
    }

    //Update the screen if max length is not exceded
    if(screenText.innerText.length <= 10)
        {screenText.textContent += buttonText;}

    
}

//Used to decide which operator to call
function operate(){
    
}

//Checks if valid expression is written
function checkValidExpression(){
    const expression = document.getElementById('screenText');
    let expressionStr = expression.textContent.toString();
    console.log(expressionStr);
}

//Temporarily flashes red screen if invalid expression detected
function invalidExpression(){

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

