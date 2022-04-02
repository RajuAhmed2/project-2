    $(document).ready(function(){
        $('.owl-carousel').owlCarousel({
            loop:true,
            margin:10,
            nav:false,
            dots:false,
            autoplay:true,
            autoplayTimeout:3000,
            responsive:{
                 0:{
                 items:1
                 },
                1000:{
                    items:1
                }
            }
        });
    });



// login form
const butn = document.querySelector('.login-click');
const page = document.querySelector('.all-page');
const clzBtn = document.querySelector('.clz-button');
const opasity = document.querySelector('.opasity');

butn.addEventListener('click',function(){

    page.classList.remove('hide');
    opasity.classList.remove('hide');    

});
clzBtn.addEventListener('click',function(){

    page.classList.add('hide');
    opasity.classList.add('hide');    

});
// sing up from

const butnr = document.querySelector('.sing-class');
const pager = document.querySelector('.all-page-sin');
const clzBtns = document.querySelector('.clz-buttons');
const opasitys = document.querySelector('.opasity');

butnr.addEventListener('click',function(){

    pager.classList.remove('hide');
    opasitys.classList.remove('hide');    

});
clzBtns.addEventListener('click',function(){

    pager.classList.add('hide');
    opasitys.classList.add('hide');    
});


// manu position popup

const position = document.querySelector('.manu-position');
const bnt = document.querySelector('.b3s');



bnt.addEventListener('click', function(){
    position.classList.remove('hedden');
});


$(document).ready(function(){
    $(bnt).click(function(){
      $(position).toggle();
    });
  });