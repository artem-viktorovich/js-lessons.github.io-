//object
console.log(car1.isTurnOn);
car1.start();
console.log(car1.isTurnOn);


//find elements
var showPrevBtn = document.getElementById('prev-show-btn');
var nextPrevBtn = document.getElementById('next-show-btn');
var slideImage = document.getElementById('slide-image');

//subscribe to events
showPrevBtn.addEventListener('click', onShowPrevBtnClick);
nextPrevBtn.addEventListener('click', onnextPrevBtnClick);

//create images array
var imageUrls = [];
imageUrls.push('https://wallpapersprinted.com/download/1/italdesign_brivido_concept_red_sport_car_hd_cars-HD.jpg');
imageUrls.push('https://image.winudf.com/v2/image/Y29tLmZhc3QucmFjaW5nLnNwb3J0cy5jYXJzLndhbGxwYXBlcl9zY3JlZW5fMl8xNTM0MDEyMTQ0XzA2OQ/screen-2.jpg?fakeurl=1&type=.jpg');
imageUrls.push('https://mocah.org/uploads/posts/110064-mansory-4xx-siracusa-geneva-auto-show-2016-sport-car-yellow.jpeg');
imageUrls.push('https://storge.pic2.me/upload/274/5fa06248876bc2.61604526.jpg');

var currentImageIndex = 0;

slideImage.src = imageUrls[currentImageIndex];
showPrevBtn.disabled = true;

//functions definitions
function onShowPrevBtnClick(){
	currentImageIndex--;
	slideImage.src = imageUrls[currentImageIndex];
	nextPrevBtn.disabled = false;
	if (currentImageIndex === 0){
		showPrevBtn.disabled = true;
	}
};
function onnextPrevBtnClick(){
	currentImageIndex++;
	slideImage.src = imageUrls[currentImageIndex];
	showPrevBtn.disabled = false;
	if (currentImageIndex === (imageUrls.length - 1) ){
		nextPrevBtn.disabled = true;
	} // imageUrls.length - 1 - длина массива
	
};
