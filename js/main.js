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

$(document).ready(function() {
    $('#resume').click(function(){
        $('#sd_resume').toggleClass('shown');
        if ( $('#sd_resume').hasClass('shown') ){
            $('#resume').html('<i class="fa fa-minus"></i> Hide Package Benefits').css({ 'background-color': '#ffffff', 'color': 'black'});
        } else {
            $('#resume').html('<i class="fa fa-plus"></i> Show Package Benefits').css({ 'background-color': '#363636', 'color': 'white'});
        }
    });
    $('#resAndCover').click(function(){
        $('#sd_resAndCover').toggleClass('shown');
        if ( $('#sd_resAndCover').hasClass('shown') ){
            $('#resAndCover').html('<i class="fa fa-minus"></i> Hide Package Benefits').css({ 'background-color': '#ffffff', 'color': 'black'});
        } else {
            $('#resAndCover').html('<i class="fa fa-plus"></i> Show Package Benefits').css({ 'background-color': '#363636', 'color': 'white'});
        }
    });
    $('#curriculumv').click(function(){
        $('#sd_curriculumv').toggleClass('shown');
        if ( $('#sd_curriculumv').hasClass('shown') ){
            $('#curriculumv').html('<i class="fa fa-minus"></i> Hide Package Benefits').css({ 'background-color': '#ffffff', 'color': 'black'});
        } else {
            $('#curriculumv').html('<i class="fa fa-plus"></i> Show Package Benefits').css({ 'background-color': '#363636', 'color': 'white'});
        }

        
    });
    $('#cvAndCl').click(function(){
        $('#sd_cvAndCl').toggleClass('shown');
        if ( $('#sd_cvAndCl').hasClass('shown') ){
            $('#cvAndCl').html('<i class="fa fa-minus"></i> Hide Package Benefits').css({ 'background-color': '#ffffff', 'color': 'black'});
        } else {
            $('#cvAndCl').html('<i class="fa fa-plus"></i> Show Package Benefits').css({ 'background-color': '#363636', 'color': 'white'});
        }
    });
});