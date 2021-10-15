function Slider() {
	this.imageUrls = []; // новые объекты с проперти
	this.currentImageIndex = 0;
	this.showPrevBtn = null;
	this.nextPrevBtn = null; 
	this.slideImage = null;
	this.start = function (elId) {
		var that = this; //замыкание внутри функции
		var elSelector = '#' + elId;
		var el = document.querySelector(elSelector);

		this.showPrevBtn = el.querySelector('.prev-show-btn');
		this.nextPrevBtn = el.querySelector('.next-show-btn');
		this.slideImage = el.querySelector('.slide-image');

		this.showPrevBtn.addEventListener('click', function (e) {
			that.onShowPrevBtnClick(e);
		});
		this.nextPrevBtn.addEventListener('click', function(e){
			that.onNextPrevBtnClick(e);
		});

		//create images array
		this.imageUrls.push('https://wallpapersprinted.com/download/1/italdesign_brivido_concept_red_sport_car_hd_cars-HD.jpg');
		this.imageUrls.push('https://image.winudf.com/v2/image/Y29tLmZhc3QucmFjaW5nLnNwb3J0cy5jYXJzLndhbGxwYXBlcl9zY3JlZW5fMl8xNTM0MDEyMTQ0XzA2OQ/screen-2.jpg?fakeurl=1&type=.jpg');
		this.imageUrls.push('https://mocah.org/uploads/posts/110064-mansory-4xx-siracusa-geneva-auto-show-2016-sport-car-yellow.jpeg');
		this.imageUrls.push('https://storge.pic2.me/upload/274/5fa06248876bc2.61604526.jpg');

		this.slideImage.src = this.imageUrls[this.currentImageIndex];
		this.showPrevBtn.disabled = true;
	};
	this.onShowPrevBtnClick = function(e){
		this.currentImageIndex--;
		this.slideImage.src = this.imageUrls[this.currentImageIndex];
		this.nextPrevBtn.disabled = false;
		if (this.currentImageIndex === 0){
			this.showPrevBtn.disabled = true;
		}
	};

	this.onNextPrevBtnClick = function(e){
		this.currentImageIndex++;
		this.slideImage.src = this.imageUrls[this.currentImageIndex]; //ошибка
		this.showPrevBtn.disabled = false;
		if (this.currentImageIndex === (this.imageUrls.length - 1) ){
			this.nextPrevBtn.disabled = true;
		} // imageUrls.length - 1 - длина массива
	};
}



