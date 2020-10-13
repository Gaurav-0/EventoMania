function openNav() {
    document.getElementById("NavigationMenu").style.width = "100%";
}
  
function closeNav() {
    document.getElementById("NavigationMenu").style.width = "0%";
}

$(window).scroll(function(){
    var scroll = $(window).scrollTop();
    var wid = $( window ).width();
    if(scroll < 100){
        $('header').css('background', 'transparent');
        $('header').css('color', 'white');
        if(wid < 480) {
            $('header').css('padding', '20px 20px');
        }
        else {
            $('header').css('padding', '20px 50px');
        }
    } else{
        $('header').css('background', '#0000008e');
        $('header').css('color', 'white');
        if(wid < 480) {
            $('header').css('padding', '10px 20px');
        }
        else {
            $('header').css('padding', '10px 50px');
        }
    }
});

var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
    var currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
        document.getElementById("NavigationBar").style.top = "0";
    } else {
        document.getElementById("NavigationBar").style.top = "-100px";
    }
    prevScrollpos = currentScrollPos;
}