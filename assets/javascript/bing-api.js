// bing-api.js
var bingSearch = function(q){

   var queryURL = "https://api.cognitive.microsoft.com/bingcustomsearch/v7.0/search?customconfig=1767835597&mkt=en-US&safesearch=Moderate&count=10&offset=0";

   $.ajax({

     url: queryURL,
     headers:{
       "Ocp-Apim-Subscription-Key":"761854577fee45cc827712125e97cd1f"
     },
     data: {
       q: q
     }

   }).then(function(results) {
       $("#bing-results").empty();

       if (Object.keys(results.rankingResponse).length == 0) {
           alert("Bing cannot find any results!");
           return;
       }
       console.log(results);
       results.webPages.value.forEach(function(el, i){
           var div = $("<div>");
           div.addClass('result')
               .append("<h2><a href="+'el.url'+">"+(i+1)+") "+el.name+"</a></h2>")
               .append("<p>"+el.snippet+"</p>")
               .appendTo("#bing-results");
       });

   });

};