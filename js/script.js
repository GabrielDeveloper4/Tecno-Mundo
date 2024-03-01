//Funcion del side-bar y la viñeta
$(document).ready(function(){
    $('.sub-btn').click(function(){
        $(this).next('.sub-menu').slideToggle();
        $(this).find('.dropdown').toggleClass('rotate');
    });
    $('.menu-btn').click(function(){
        $('.side-bar').addClass('active');
    });
    $('.close-btn').click(function(){
        $('.side-bar').removeClass('active');
    });
});