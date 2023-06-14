// $(function(){
//     $('.menu-list li:first').hide(2000);
//     $('.menu-list li:first').show(2000);
// });

//второй способ

// $(function(){
//     $('.menu-list li:first').hide(2000).show(2000);
// });


//третий способ


$(function(){
    var tagUl =  $('.menu-list li:first');
    tagUl.hide(2000).show(2000).text('kzkzkz');
});