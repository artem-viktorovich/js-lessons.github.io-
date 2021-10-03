// function alertfirstNameValue() {
// 	console.log(firstNameEl.value);
// 	console.log(firstNameEl.className);
// };

// function alertlistNameValue() {
// 	console.log(lastNameEl.value);
// 	console.log(lastNameEl.className);
// };

// function alertAddressValue() {
// 	console.log(addressEl.value);
// 	console.log(addressEl.className);
// };

// function alertHobbiesValue() {
// 	console.log(hobiesEl.value);
// 	console.log(hobiesEl.className);
// };

function alertValue(elementParameters) {
	console.log(elementParameters.value);
	console.log(elementParameters.className);
}


var firstNameId = 'first-name';
var firstNameEl = document.getElementById(firstNameId);
alertValue(firstNameEl);


var lastNameId = 'last-name';
var lastNameEl = document.getElementById(lastNameId);
// alertlistNameValue();
alertValue(lastNameEl);

var addressId = 'address';
var addressEl = document.getElementById(addressId);
// alertAddressValue();
alertValue(addressEl);

var citiesId = 'cities';
var citiesEl = document.getElementById(citiesId);
alertValue(citiesEl);

var hobiesId = 'hobies';
var hobiesEl = document.getElementById(hobiesId);
// alertHobbiesValue();
alertValue(hobiesEl);

var avatarWrapperId = 'avatar';
var avatarWrapperEl = document.getElementById(avatarWrapperId);




// function alertValue() {
// 	console.log(firstNameEl.value);
// 	console.log(lastNameEl.value);
// 	console.log(addressEl.value);
// 	console.log(citiesEl.value);
// };
// alertValue();

firstNameEl.value = 'Anton';
console.log(firstNameEl.value);
console.log(firstNameEl.className);

lastNameEl.className = 'karta';
console.log(lastNameEl.value);
console.log(lastNameEl.className);

// firstNameEl.className = 'last-name kuku error';





//window.alert(firstNameEl.value);
//window.alert(lastNameEl.value);
// firstNameEl.setAttribute('value', 'Anton');  //смена value этот атрибут работает для связки js с html
// firstNameEl.className = 'Buka';
//	firstNameEl.value = 'Anton';
//firstNameEl.className = 'temp';
//window.alert(firstNameId.value);
//window.alert(firstNameEl.className);
// firstNameEl.className = 'first-name  kuku error';
// window.alert(avatarWrapperEl.innerHTML);
