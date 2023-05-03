$('.page-scroll').on('click', function(e) {

    var tujuan = $(this).attr('href');
   
    var elemenTujuan = $(tujuan);
   
    $('html , body').animate({
     scrollTop: elemenTujuan.offset().top - 50
    }, 1000 , 'swing');
   
    e.preventDefault();
   });



$(window).on('load', function(){
    $('.p-Kiri').addClass('pMuncul');
    $('.p-Kanan').addClass('pMuncul');
});


   $(window).scroll(function(){
    var wScroll = $(this).scrollTop();

    $('.jumbotron img').css({
        'transform' : 'translate (0px , '+ wScroll/4 +'%)'
    });

    $('.jumbotron h1').css({
        'transform' : 'translate (0px , '+ wScroll/2 +'%)'
    });

    $('.jumbotron p').css({
        'transform' : 'translate (0px , '+ wScroll/1.2 +'%)'
    });


    if( wScroll > $('.gallery').offset().top - 250 ) {
      $('.gallery .thumbnail').each(function(i){
        setTimeout(function(){
            $('.gallery .thumbnail').eq(i).addClass('muncul');

        }, 300 * (i+1));

      });
      
    }
});


















