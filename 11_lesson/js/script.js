var firstNameId = 'first-name';
var firstNameEl = document.getElementById(firstNameId);
var lastNameId = 'last-name';
var lastNameEl = document.getElementById(lastNameId);
var addressId = 'address';
var addressEl = document.getElementById(addressId);
var citiesId = 'cities';
var citiesEl = document.getElementById(citiesId);
var hobiesId = 'cities';
var hobiesEl = document.getElementById(hobiesId);
var avatarWrapperId = 'avatar';
var avatarWrapperEl = document.getElementById(avatarWrapperId);


function alertValue() {
	console.log(firstNameEl.value);
	console.log(lastNameEl.value);
	console.log(addressEl.value);
	console.log(citiesEl.value);
};
alertValue();

firstNameEl.value = 'Anton';
alertValue();


firstNameEl.className = 'last-name kuku error';
alertValue();





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
