/*
    Explain how script works here
*/

//Runs when program loads
assignBtnListeners();

//Adds event listeners to all buttons
function assignBtnListeners(){
    const buttons = document.getElementsByClassName('button');
    
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
        default:
            updateScreen(button);
    }
}

//Updates the calculator screen
function updateScreen(button){
    const screenText = document.getElementById('screenText');
    const buttonText = button.textContent.toString();

    if(screenText.innerText.length <= 10)
        {screenText.textContent += buttonText;} 
}

//Used to decide which operator to call. Called when equal key is pressed.
function operate(){
    //Checks if expression is valid before calculating
    checkExpression();
}

//Checks if valid expression is written
function checkExpression(){

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

