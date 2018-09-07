posicionarMenu();

    $(window).scroll(function() {    
        posicionarMenu();
    });

    function posicionarMenu() {
        var altura_del_header = $('.header').outerHeight(true);
        var altura_del_menu = $('.navegacion').outerHeight(true);

        if ($(window).scrollTop() >= altura_del_header){
            $('.navegacion').addClass('fixed');
            $('.contenido').css('margin-top', (altura_del_menu) + 'px');
        } else {
            $('.navegacion').removeClass('fixed');
            $('.contenido').css('margin-top', '0');
        }
    }
