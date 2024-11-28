$(document).ready(function() {
    
    $('.header nav .depth1 > li').hover(function(){
        $(this).children('div').stop().slideDown(300);
    }, function(){
        $(this).children('div').stop().slideUp(300);
    });
    
    $('.mobile-nav .depth1 > li > div').hide(); // 처음에 2단 카테고리를 닫아둡니다.

    $('.mobile-nav .depth1 > li:first-child > a').click(function(e){
        e.preventDefault(); // a 태그의 기본 동작을 막습니다.
        var $this = $(this);
        var $subMenu = $this.siblings('div');

        if ($subMenu.is(':visible')) {
            $subMenu.stop().slideUp(300);
        } else {
            $('.mobile-nav .depth1 > li > div').stop().slideUp(300); // 다른 2단 카테고리는 닫습니다.
            $subMenu.stop().slideDown(300);
        }
    });

    $('.mobile-nav .depth1 > li:not(:first-child) > a').click(function() {
        window.location.href = $(this).attr('href');
    });

    $('.mmn').click(function(){
        $('.mobile-nav').toggleClass('active');
        $('.mmn').toggleClass('active');
        $('.dimm').toggleClass('active');
    });

}); 

$( document ).ready( function() {
    var jbOffset = $( '.header' ).offset();
  
    $( window ).scroll( function() {
      if ( $( document ).scrollTop() > jbOffset.top ) {
        $( '.header' ).addClass( 'scroll' );
      }
      else {
        $( '.header' ).removeClass( 'scroll' );
      }
    });
});