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
        buttons[i].addEventListener('click', updateScreen);
    }
}

//Updates the calculator screen
function updateScreen(){
    
}

//Used to decide which operator to call. Called when equal key is pressed.
function operate(){

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

}

//Clears all memory
function clearAll(){

}

