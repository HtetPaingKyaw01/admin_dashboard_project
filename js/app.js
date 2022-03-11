$('.show-sidebar-btn').click(function(){
    $('.sidebar').animate({marginLeft:0});
});

$('.hide-sidebar-btn').click(function(){
    $('.sidebar').animate({marginLeft:"-100%"})
});

function go(url){
    setTimeout(function(){
        location.href = `${url}`;
    },500);
};

var popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'))
var popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
  return new bootstrap.Popover(popoverTriggerEl)
})

$('.full-screen-btn').click(function(){
    let current = $('.full-screen-btn').closest('.card');
    current.toggleClass('full-screen-card');
    if(current.hasClass('full-screen-card')){
        $('.full-screen-btn').html('<i class=" feather-minimize-2 "></i>');
    }else{
        $('.full-screen-btn').html('<i class=" feather-maximize-2 "></i>');
    }
});

let screenHeight = $(window).height();
let currentItemHeight = $('.nav-menu .active').offset().top;

if(currentItemHeight > screenHeight*0.8){
    $('.sidebar').animate({
        scrollTop: currentItemHeight
    },1000);
}