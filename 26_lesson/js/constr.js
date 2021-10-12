function Dog() {
	// var this = {};
	this.name =  'Laika';
	this.voice = function () {
		console.log('Hey, my name  is' + this.name);
	}
	//return this;
}

var chauchau = new Dog('Laika');
var buldog = new Dog ('Bobik');