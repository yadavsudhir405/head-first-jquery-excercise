$(document).ready(function(){
    animateMe();
    function animateMe() {
        $(".my-div").animate({top: "500px"}, 1500).animate({top: "-500px"}, 1500);
        animateMe();
    }

});

