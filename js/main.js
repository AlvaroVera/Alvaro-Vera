$(document).ready(function () {

    $('#toggle-menu').click(function () {
        if ($('#navegacion').css("left") == "-160px") {
            $('#navegacion').animate({left: '0px'}, 350);
        }
        else  {
            $('#navegacion').animate({left: '-160px'}, 350);
            $(this).animate({left: '0px'}, 350);
        }
	});
    $('#toggle-menu').click(function () {
	            $(this).toggleClass("active");
    });

    //Links de el Menu
    $("a").on("click",function(){
        if(this.hash){
            //console.log($(this).attr('href'));
            $("html body").animate({"scrollTop":$($(this).attr('href')).offset().top},1400);
            return false;
         }
    });
    //Ir hacia Arriba
    $(".scrollTop").click(function () {
        $("html body").animate({"scrollTop":$("#presentacion").offset().top},2400);
    })


});
