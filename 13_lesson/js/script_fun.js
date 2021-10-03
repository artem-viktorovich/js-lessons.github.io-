
function logValue(Id) {
	var el = document.getElementById(Id);
	console.log(el.value);
}

function getValue(Id) {
	var el = document.getElementById(Id);
	return el.value;
}

var firstNameId = 'first-name';
var lastNameId = 'last-name';

logValue(firstNameId);
logValue(lastNameId);


var value = getValue(firstNameId);
window.alert(value);