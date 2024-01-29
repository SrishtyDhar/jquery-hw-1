$(function(){
 
    let faq = $('.faq');
    let faqHeader = $('.faqHeader')

    faq.click(function () {

        if($(this).hasClass('active')){
            $(this).removeClass('active')
        }else{

            faq.removeClass('active')
            $(this).addClass('active')
        }
    });
     
    let preLoader = $('.preLoader')
    

     $(window).load(function(){
     preLoader.fadeOut(200)
        
     })

     let navbar = $('.navbar')

     $(window).scroll(function(){
     let scrollTop = $(window).scrollTop()

     if(scrollTop > 1000){
      navbar.addClass('fixed')
     }else{
        navbar.removeClass('fixed')
     }
     })



} )


