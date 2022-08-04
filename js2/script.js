//Accordion start//

$(document).ready(function(){
    $('.faq_title').click(function(event){
       $(this).toggleClass('active').next().slideToggle(300);
    });
});

//Accordion end//

//Slider start//

$(document).ready(function (){
    $('.slider').slick({
            arrows: false,
            dots: true,
            adaptiveHeight: true,
    });

});

//Slider end//

