var car1 = {
	name: 'Reno',
	isTurnOn: false,
	speed: 0,
	engine:{
		v: 1.6,
		horsesPower: 120
	},
	start: function () {
		this.isTurnOn = true; //this функция смотрит на саму себя и выводит информацию
		this.speed = 10;
	}
};

// console.log(car1.engine.v);