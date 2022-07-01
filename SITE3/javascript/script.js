// SINTAXE JQUERY $
$(function() {

    // menu
    $('.botaoMenu').click(function(event){
        event.stopPropagation();
        if(!$(this).hasClass('menuAtivo')){
            $(this).addClass('menuAtivo');
            $('nav ul').animate({'left':'0px'},300);
        }else {
            $(this).removeClass('menuAtivo');
            $('nav ul').animate({'left':'-100%'},300);
        }
    });

    $('body').on('click',function(){
        $('.botaoMenu').removeClass('menuAtivo');
        $('nav ul').animate({'left':'-100%'},300);
    });

    // banner
    $('#slideshow-banner').slide({
        cdTime : 5000, // in ms
        controllerLeftButton :"imagens/esquerda.png",
        controllerRightButton :"imagens/direita.png"
    });

    // galeria
    Fancybox.bind('[data-fancybox="gallery"]', {
        infinite: false,
        zoom: true,
    });    
});