/*
    Explain how script works here

    On resume: Fix bug where numbers don't round on keystroke
    Touch up css buttons
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
    
    //Assign event listener to each node in nodelist
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', (evt) =>
            checkButtonPressed(buttons[i]));
    }

    //Add event listeners for keystrokes. Pass the button to checkButtonPressed
    let keystroke;
    let arrayOfBtns = Array.from(buttons);
    document.addEventListener('keydown', (e) => {
        document.getElementById('screen').focus();
        console.log(e.key);
        switch(e.key) {
            case '0':
                keystroke = arrayOfBtns.find(btn => btn.id === 'btn0');
                checkButtonPressed(keystroke);
                break;
            case '1':
                keystroke = arrayOfBtns.find(btn => btn.id === 'btn1');
                checkButtonPressed(keystroke);
                break;
            case '2':
                keystroke = arrayOfBtns.find(btn => btn.id === 'btn2');
                checkButtonPressed(keystroke);
                break;
            case '3':
                keystroke = arrayOfBtns.find(btn => btn.id === 'btn3');
                checkButtonPressed(keystroke);
                break;
            case '4':
                keystroke = arrayOfBtns.find(btn => btn.id === 'btn4');
                checkButtonPressed(keystroke);
                break;
            case '5':
                keystroke = arrayOfBtns.find(btn => btn.id === 'btn5');
                checkButtonPressed(keystroke);
                break;
            case '6':
                keystroke = arrayOfBtns.find(btn => btn.id === 'btn6');
                checkButtonPressed(keystroke);
                break;
            case '7':
                keystroke = arrayOfBtns.find(btn => btn.id === 'btn7');
                checkButtonPressed(keystroke);
                break;
            case '8':
                keystroke = arrayOfBtns.find(btn => btn.id === 'btn8');
                checkButtonPressed(keystroke);
                break;
            case '9':
                keystroke = arrayOfBtns.find(btn => btn.id === 'btn9');
                checkButtonPressed(keystroke);
                break;
            case '.':
                keystroke = arrayOfBtns.find(btn => btn.id === 'btnDecimal');
                checkButtonPressed(keystroke);
                break;
            case '/':
                keystroke = arrayOfBtns.find(btn => btn.id === 'btnDivide');
                checkButtonPressed(keystroke);
                break;
            case 'x':
                keystroke = arrayOfBtns.find(btn => btn.id === 'btnMultiply');
                checkButtonPressed(keystroke);
                break;
            case '+':
                keystroke = arrayOfBtns.find(btn => btn.id === 'btnAdd');
                checkButtonPressed(keystroke);
                break;
            case '-':
                keystroke = arrayOfBtns.find(btn => btn.id === 'btnSubtract');
                checkButtonPressed(keystroke);
                break;
            case 'Enter':
                keystroke = arrayOfBtns.find(btn => btn.id === 'btnEquals');
                checkButtonPressed(keystroke);
                break;
            case 'Backspace':
                keystroke = arrayOfBtns.find(btn => btn.id === 'btnBackspace');
                checkButtonPressed(keystroke);
                break;
            case 'Delete':
                keystroke = arrayOfBtns.find(btn => btn.id === 'btnClear');
                checkButtonPressed(keystroke);
                break;
        }
    });
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
    //console.log(nums);
}

//Create item for new number and set name of operator
function setOperators(button){
    nums.push('');
    operators.push(button.id);
}

//Updates the calculator screen
function updateScreen(button){
    const screenText = document.getElementById('screenText');
    const buttonText = button.textContent.toString();

    //Split each screen character into array
    let screenArr = screenText.innerText.split('');
    
    //Adds 0 if first character is a decimal
    if(buttonText === '.'){
        if (screenText.innerText === ''){screenText.textContent = '0'}
    }

    //Check if already a decimal in the current number
    if (screenText.innerText != ''){
        let numText = nums[nums.length-1].toString();
        if (buttonText === '.' && numText.includes('.')) {
            console.log('true');
            return;
        }
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
        lastItem == '÷') {
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

//Solve the equation!
function operate(){
    let solution = 0;
    let screenText = document.getElementById('screenText');

    //If nothing has been entered, solution is zero
    if (screenText.innerText === '') {
        screenText.innerText = 0;
        return;
    }

    //If there is an extra operator, remove it. Also remove empty number.
    if(nums[nums.length-1] === '') {nums.pop();}
    if(nums.length === operators.length) {operators.pop();}

    for (let i = 0; i <= operators.length; i++) {

        //On first iteration, working solution is first number
        if (i === 0) {solution = nums[i]}
        
        //Perform operation based off operator
        switch (operators[i]) {
            case 'btnAdd':
                solution = add(solution, nums[i+1]);
                break;
            case 'btnSubtract':
                solution = subtract(solution, nums[i+1]);
                break;
            case 'btnMultiply':
                solution = multiply(solution, nums[i+1]);
                break;
            case 'btnDivide':
                solution = divide(solution, nums[i+1]);
                if (solution === 'DivByZ') {return}
                break;
        }
    }

    solution = roundNumber(solution);

    //Clear memory and update screen with solution
    clearAll();
    screenText = document.getElementById('screenText');
    screenText.innerText = solution;
    nums[0] = solution;
}

//Addition operator
function add(a,b){
    return Number(a) + Number(b);
}

//Subtraction operator
function subtract(a,b){
    return Number(a) - Number(b);
}

//Multiplication operator
function multiply(a,b){
    return Number(a) * Number(b);
}

//Division operator
function divide(a,b){
    if(b == 0) {
        divideByZero();
        return 'DivByZ';
    }
    else {
        return Number(a) / Number(b);
    }
}

//Called if division by zero is attempted
function divideByZero(){
    clearAll();
    const screenText = document.getElementById('screenText');

    //Disable = button during message
    const equalBtn = document.getElementById('btnEquals');
    equalBtn.disabled = true;

    //Display message
    setTimeout(() => {
        screenText.innerText = 'DIVIDING';
    }, "100");
    setTimeout(() => {
        screenText.innerText = 'BY';
    }, "600");
    setTimeout(() => {
        screenText.innerText = 'ZERO';
    }, "900");
    setTimeout(() => {
        screenText.innerText = 'EH?';
    }, "1700");
    setTimeout(() => {
        screenText.innerText = '';
    }, "2200");
    setTimeout(() => {
        screenText.style.fontSize = '60px';
        screenText.innerText = 'ಠ_ಠ';
    }, "2400");

    //Clear screen after message
    setTimeout(() => {
        screenText.style.fontSize = '40px';
        clearAll();
    }, "3400");

    //Re-enable button
    equalBtn.disabled = false;
}

//Backspace button to delete most recent character
function backspace(){
    const screenText = document.getElementById('screenText');
    let screenContent = screenText.innerText.toString();

    //Makes sure nums never returns undefined
    if (nums.length === 0) {nums.push(''); return};

    //Delete last character from memory
    let lastChar = screenContent.charAt(screenContent.length-1);
    //If the last character is between 0-9 or a decimal
    if((lastChar.charCodeAt(0) >= 48
        && lastChar.charCodeAt(0) <= 57)
        || lastChar === '.') {
        nums[nums.length-1] = nums[nums.length-1].slice(0, -1);
        //Delete the last item in nums array if it is now empty
        if(nums[nums.length-1] === '') {nums.pop()}
    }
    //Delete last operator
    else {
        operators.pop();
    }

    //Delete last character from screen
    screenText.textContent = screenContent.slice(0, -1);
}

//Clears all memory
function clearAll(){
    const screenText = document.getElementById('screenText');

    //Blanks screen
    screenText.textContent = '';

    //Resets global arrays
    nums = [''];
    operators.length = 0;
}

//Round long numbers
function roundNumber(unroundedNum){
    console.log(unroundedNum);
    if(unroundedNum === undefined){return 0}

    unroundedNum = unroundedNum.toString();
    let roundedNum = 0;

    //Split the string at the decimal
    let decimals = unroundedNum.split('.');
    
    //If not a decimal
    if (decimals[1] === undefined) {
        roundedNum = unroundedNum;
    }
    //If decimal is short and does not need rounding
    else if (decimals[1].length === 1 || decimals[1].length === 2) {
        roundedNum = unroundedNum;
    }
    //If decimal exceeds 2 points
    else if (decimals[1].length > 2) {
        roundedNum = decimals[0] + '.' + decimals[1].substring(0,2);
    }
    else {
        roundedNum = decimals[0].toString();
    }

    //If even after rounding, the answer is too big for the screen
    if(roundedNum.length > 12) {
        return 'Error';
    }

    return roundedNum;
}

