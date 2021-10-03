var buttonAddition = document.getElementById('addition');
var buttonSubtraction = document.getElementById('subtraction');
var buttonMultiplication = document.getElementById('multiplication');
var buttonDivision = document.getElementById('division');

function onButtonAdditionClick(){
	var input1 = document.getElementById('number1');
	var input2 = document.getElementById('number2');
	var number1 = Number(input1.value);
	var number2 = Number(input2.value);
	var summ = number1 + number2;
	console.log(summ);
}
function onButtonSubtractionClick(){
	var input1 = document.getElementById('number1');
	var input2 = document.getElementById('number2');
	var number1 = Number(input1.value);
	var number2 = Number(input2.value);
	var summ = number1 - number2;
	console.log(summ);
	
}
function onButtonMultiplicationClick(){
	var input1 = document.getElementById('number1');
	var input2 = document.getElementById('number2');
	var number1 = Number(input1.value);
	var number2 = Number(input2.value);
	var summ = number1 * number2;
	console.log(summ);
}
function onButtonDivisionClick(){
	var input1 = document.getElementById('number1');
	var input2 = document.getElementById('number2');
	var number1 = Number(input1.value);
	var number2 = Number(input2.value);
	var summ = number1 / number2;
	console.log(summ);
}
buttonAddition.addEventListener('click', onButtonAdditionClick);
buttonSubtraction.addEventListener('click', onButtonSubtractionClick);
buttonMultiplication.addEventListener('click', onButtonMultiplicationClick);
buttonDivision.addEventListener('click', onButtonDivisionClick);