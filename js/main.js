$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    navText : ["<i class='fas fa-arrow-circle-left fa-2x'></i>","<i class='fas fa-arrow-circle-right fa-2x'></i>"],
    rewindNav : true,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
            nav:true
        },
        600:{
            items:3,
            nav:false
        },
        1000:{
            items:3,
            nav:true,
        }
    }
})
// Sidemenu and body on click animations

$(document).ready(function() {
    $('#openButton').click(function() {
        $(this).toggleClass('active');
        $("#mySidenav").toggleClass('open');
        $('#myNav').toggleClass('open');
    });
    
    $('#closeButton').click(function()  {
        $("#mySidenav").removeClass('open');
        $('#myNav').toggleClass('open');
    });
    $('#resume').click(function(){
        $('#sd_resume').toggleClass('shown');
        if ( $('#sd_resume').hasClass('shown') ){
            $('#resume').html('<i class="fa fa-minus"></i> Hide Package Benefits').addClass('shown');
        } else {
            $('#resume').html('<i class="fa fa-plus"></i> Show Package Benefits').removeClass('shown');
        }
    });
    $('#resAndCover').click(function(){
        $('#sd_resAndCover').toggleClass('shown');
        if ( $('#sd_resAndCover').hasClass('shown') ){
            $('#resAndCover').html('<i class="fa fa-minus"></i> Hide Package Benefits').addClass('shown');
        } else {
            $('#resAndCover').html('<i class="fa fa-plus"></i> Show Package Benefits').removeClass('shown');
        }
    });
    $('#curriculumv').click(function(){
        $('#sd_curriculumv').toggleClass('shown');
        if ( $('#sd_curriculumv').hasClass('shown') ){
            $('#curriculumv').html('<i class="fa fa-minus"></i> Hide Package Benefits').addClass('shown');
        } else {
            $('#curriculumv').html('<i class="fa fa-plus"></i> Show Package Benefits').removeClass('shown');
        }
    });
    $('#cvAndCl').click(function(){
        $('#sd_cvAndCl').toggleClass('shown');
        if ( $('#sd_cvAndCl').hasClass('shown') ){
            $('#cvAndCl').html('<i class="fa fa-minus"></i> Hide Package Benefits').addClass('shown');
        } else {
            $('#cvAndCl').html('<i class="fa fa-plus"></i> Show Package Benefits').removeClass('shown');
        }
    });
    
    
        $("#scrollMenu li a").click(function(e) {
          var destination = $(this).attr('href');
          e.preventDefault();
          
        $(this).parent().addClass('active');
        $(this).parent().siblings().removeClass('active');
          $('html, body').animate({
            scrollTop: $(destination).offset().top
          }, 300);
        });
});