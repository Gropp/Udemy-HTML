// SINTAXE JQUERY $
$(function() {
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

    Fancybox.bind('[data-fancybox="gallery"]', {
        infinite: false,
        zoom: true,
    });
});