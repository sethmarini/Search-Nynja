$(document).ready(function(){

    // app.js
    $(function(){
        $("form#search").submit(function(event){
            event.preventDefault();
            var q = $(this).find("input").eq(0).val();
            googleSearch(q);
            bingSearch(q);
        });

    });

    //carousel	
    // $('#carousel').carousel({
    //     interval: false,
    // });

     //TO DO: for loop to find height of the tallest result and have it set the resultHeight var.

    var resultHeight = 500 + "px";

    $(".item").css("height", resultHeight)

   
});