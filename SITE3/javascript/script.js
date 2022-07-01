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

    //transicao dos menus por id
    var $doc = $('html, body');
        $('.scrollSuave').click(function(){
            $doc.animate ({
                scrollTop:$($.attr(this,'href')).offset().top
            }, 1000);
            return false;
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

    //fazer o botao voltar topo aparecer somente qdo o site rolar para baixo
    $(document).scroll(function(){
        if($(this).scrollTop() > 500) {
            //mostra o botao depois de descer 500px
            document.getElementById("voltarTopo").style.display = "block";
        } else {
            document.getElementById("voltarTopo").style.display = "none";
        }
    });
});