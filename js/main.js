
$( document ).ready(function() {
    $('.item-hotel').show();
    $('.item-ticket').hide();
    $('.item-price').hide();

    
    

    // for hotel
$('#hotel').click(function(){
     $('.item-hotel').show();
    $('.item-ticket').hide();
    $('.item-price').hide();

    $('#hotel span').addClass('line');
    $('#ticket span').removeClass('line');
    $('#price span').removeClass('line');
    });
    $('#ticket').click(function(){
        $('.item-hotel').hide();
       $('.item-ticket').show();
       $('.item-price').hide();

       $('#hotel span').removeClass('line');
       $('#ticket span').addClass('line');
       $('#price span').removeClass('line');
       });

       $('#price').click(function(){
        $('.item-hotel').hide();
       $('.item-ticket').hide();
       $('.item-price').show();
       
       $('#hotel span').removeClass('line');
    $('#ticket span').removeClass('line');
    $('#price span').addClass('line');
       });
});

