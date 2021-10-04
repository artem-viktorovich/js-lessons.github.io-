var buttonAddition = document.getElementById('addition');
var buttonSubtraction = document.getElementById('subtraction');
var buttonMultiplication = document.getElementById('multiplication');
var buttonDivision = document.getElementById('division');

var input1 = document.getElementById('number1');
var input2 = document.getElementById('number2');

function makeOperation(operationCode){
var number1 = Number(input1.value);
var number2 = Number(input2.value);
	if(operationCode === '+'){
		var result = number1 + number2;
	} else if(operationCode === '-'){
		var result = number1 - number2;
	} else if(operationCode === '*'){
		var result = number1 * number2;
	} else if(operationCode === '/'){
		var result = number1 / number2;
} else {
	window.alert('operation is unknown');
}
	window.alert(result);
}

function onOperationButtonClick(eventObject) {
	var clickedElement = eventObject.currentTarget;
	var operation = clickedElement.innerHTML; //получаем элемент с button
		makeOperation(operation);
}

var operationButtons = [buttonAddition, buttonSubtraction, buttonMultiplication, buttonDivision];

for (var i = 0; i < operationButtons.length; i++) {
	operationButtons[i].addEventListener('click', onOperationButtonClick);
}