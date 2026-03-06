import $ from 'jquery';

$(document).ready(function(){
    $('.order-background').hide();
    let productName = '';
    let productPrice = '';
    let isValid = true;
    let errors = [];

    $('.card__button').click(function(e) {
        
        $('.order-background').fadeIn(300);
        $('body').css('overflow', 'hidden');
        
        let $card = $(this).closest('.card');
        productName = $card.find('.card__title').text();
        productPrice = $card.find('.card__price').text();
        
    });
    
    $('form').submit(function(e) {
        e.preventDefault()
        errors = [];
        isValid = true;
        let fio = $('input[name="fio"]').val() ;
        let email = $('input[name="email"]').val();
        let deliveryType = $('input[name="deliveryType"]:checked').val();
        let city = $('select[name="city"]').val();
    
        
        if (!deliveryType) {
            isValid = false;
            errors.push('Выберите способ доставки');
        }
        
        
        if (!city) {
            isValid = false;
            errors.push('Выберите город');
        }
        
        if (isValid) {
            alert('Заказ успешно оформлен!\n\n' + 
                'ФИО: ' + fio + '\n' +
                'Email: ' + email + '\n' +
                'Доставка: ' + deliveryType + '\n' +
                'Город: ' + city + '\n' +
                'Название товара: ' + productName + '\n' +
                'Цена: ' + productPrice);
            
            closeModal();
            
            // очищаем форму
            this.reset();
            
        } else {
            alert('Ошибка при оформлении заказа:\n' + errors.join('\n'));
        }
        
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
        