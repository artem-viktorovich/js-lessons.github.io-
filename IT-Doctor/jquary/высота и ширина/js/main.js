// $(function(){
//     var w = $('.btn').width();
//     alert(w); //- вывод ширины данного объекта
//     var h = $('.btn').height();
//     alert(h); //- вывод высоты данного объекта
// });



// $(function(){
//     var w = $('.btn').width(100); //таким способом можно изменять объект без css

// });

//Универсальная функция для определения ширины и высоты любого элемента и вставка в любой раздел кода

$(function(){
    function winthAndHeight(element){ //элемент, который мы берём
        var className='.'+element;//выбираемый объект
        var w = $(className).width(); //ширина объекта
        var h = $(className).height(); //высота бобъекта
        $('.menu-list li:nth-child(3)').text('Ширина: '+w+'; Высота' +h); //место куда записываем данные
    }
    winthAndHeight('btn'); //любые данные
})