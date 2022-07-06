let gameResultElement = document.getElementById("gameResult");
let userInputElement = document.getElementById("userInput");
let firstNumberElement = document.getElementById("firstNumber");

let secondNumberElement = document.getElementById("secondNumber");

let succesMessage = "Congratulations! You got it Right.";
let failMessage = "Please Try Again!";

function onRestart() {
    firstNumberElement.textContent = Math.ceil(Math.random() * 100);
    secondNumberElement.textContent = Math.ceil(Math.random() * 100);
    gameResultElement.textContent = "";
    userInputElement.value = "";
}
onRestart();

function onCheck() {
    let firstInteger = parseInt(firstNumberElement.textContent);
    let secondInteger = parseInt(secondNumberElement.textContent);
    let userSum = parseInt(userInputElement.value);
    if (userSum === (firstInteger + secondInteger)) {
        gameResultElement.textContent = succesMessage;
        gameResultElement.style.backgroundColor = "#028a0f";

    } else {
        gameResultElement.textContent = failMessage;
        gameResultElement.style.backgroundColor = "#1e217c";

    }
}