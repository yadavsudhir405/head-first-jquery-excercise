$(document).ready(function() {
    $(".guess_box").hover(
        function () {
            $(this).addClass("hover")
        },
        function () {
            $(this).removeClass("hover")
        }
    );
    $(".guess_box").click(checkForCode);

    function getRandom(num){
        var random_number = Math.floor(Math.random()*num);
        return random_number;
    }
    var hideCode = function(){
        var randomNumber = getRandom(4);
        $(".guess_box").each(function (index, value) {
            if(index == randomNumber){
                $(this).append("<span id = 'has_discount'></span>");
                return false;
            }
        });
    }
    hideCode();
    function checkForCode(){
        var discount;
        if($.contains(this, document.getElementById("has_discount"))){
            var my_num = getRandom(5);
            discount = "<p> Your discount is "+ my_num +"%</p>";
        }else{
            discount = "<p>Sorry, No discount this time";
        }
        $(this).append(discount);
        $(".guess_box").each(function () {
            $(this).unbind("click");
            if($.contains(this, document.getElementById("has_discount"))){
                $(this).addClass("discount");
            }else{
                $(this).addClass("no_discount");
            }
        });
    }

});