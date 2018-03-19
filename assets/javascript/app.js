// app.js
$(function(){
    $("form#search").submit(function(event){
        event.preventDefault();
        var q = $(this).find("input").eq(0).val();
        googleSearch(q);
        bingSearch(q);
    });

});