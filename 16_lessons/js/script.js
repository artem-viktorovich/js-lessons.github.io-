var buttonAddition = document.getElementById('addition');
var buttonSubtraction = document.getElementById('subtraction');
var buttonMultiplication = document.getElementById('multiplication');
var buttonDivision = document.getElementById('division');

var input1 = document.getElementById('number1');
var input2 = document.getElementById('number2');

function getNumber1() {
		return Number(input1.value);
}
function getNumber2() {
	return Number(input2.value);
}

function makeOperation(operationCode){
	if(operationCode === '+'){
		var result = getNumber1() + getNumber2();
	} else if(operationCode === '-'){
		var result = getNumber1() - getNumber2();
	}else if(operationCode === '*'){
		var result = getNumber1() * getNumber2();
	} else if(operationCode === '/'){
		var result = getNumber1() / getNumber2();
} else {
	window.alert('operation is unknown');
}
	window.alert(result);
}

function onButtonAdditionClick(){
	makeOperation('+');
}
function onButtonSubtractionClick(){
	makeOperation('-');
}
function onButtonMultiplicationClick(){
	makeOperation('*');
}
function onButtonDivisionClick(){
	makeOperation('/');
}
buttonAddition.addEventListener('click', onButtonAdditionClick);
buttonSubtraction.addEventListener('click', onButtonSubtractionClick);
buttonMultiplication.addEventListener('click', onButtonMultiplicationClick);
buttonDivision.addEventListener('click', onButtonDivisionClick);