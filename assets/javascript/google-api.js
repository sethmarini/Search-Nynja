//google-api.js
var googleSearch = function(q){

    var key = "AIzaSyAK3GjPxQO3dWd69wlknku8kBztog364a4";
    var queryURL = "https://www.googleapis.com/customsearch/v1";
    var cxKey = "013931264233922910881:z_-nhgrbqyw";

    $.ajax({

      url: queryURL,
      data: {
          q: q,
          key: key,
          cx: cxKey
      }

    }).then(function(results) {
        $("#google-results").empty();

        if (results.searchInformation.totalResults == 0) {
            alert("Google cannot find any results!");
            return;
        };

        console.log(results);
        results.items.forEach(function(el, i){
            var div = $("<div>");
            div.addClass('result')
                .append("<h2> <a href="+'el.link'+">"+(i+1)+") "+el.title+"</a></h2>")
                .append("<p>"+el.snippet+"</p>")
                .appendTo("#google-results");

        });

    });

};