$(function () {
    $("#search").on("click", function () {
        var searchTerm = $("#inputForm").val();
        var url = "https://en.wikipedia.org/w/api.php?action=opensearch&search=" + searchTerm + "&format=json&callback=?&limit=10";
        $.ajax({
            url: url,
            type: 'GET',
            contentType: "application/json; charset=utf-8",
            async: false,
            dataType: "json",
            // plop data
            success: function (data, status, jqXHR) {
                $("#wiki-results").empty();
                //console.log(data);
                $("#wiki-results").html();
                for (var i = 0; i < data[1].length; i++) {
                    $("#wiki-results").append("<div class='result'><h2><a href="+ data[3][i] + ">" + (i+1) + ") "+ data[1][i]+ "</a></h2>" + "<p>" + data[2][i] + "</p></div>");
                }

            }
        })
            .done(function () {
                console.log("success");
            })
            .fail(function () {
                console.log("error");
            })
            .always(function () {
                console.log("complete");
            });


    });
});