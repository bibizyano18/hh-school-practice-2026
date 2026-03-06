import $ from 'jquery';

$(document).ready(function(){
    $(".order-background").hide();

    $(".card__button").click(function(e) {

        // e.stopPropagation();
        $('.order-background').fadeIn(300);
        $('body').css('overflow', 'hidden');
    });

    $('.order-background').click(function(e) {
        if ($(e.target).hasClass('order-background')) {
            closeModal();
        }
    });

    function closeModal() {
        $('.order-background').fadeOut(300);
        $('body').css('overflow', ''); 
    }
});
        