

var apiKey = "GtjLNczC810d4TJgtA4AwdApcoks5SHI"

var searchVal = $("#searchTerm").val();

var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=" + searchVal + "&api-key=" + apiKey


console.log(queryURL);

$("#searchBtn").on("click", function(event) {

    event.preventDefault();

    

$.ajax({
  url: queryURL,
  method: "GET"
}).then(function(response) {

    $("#searchResults").append("1: " + response.response.docs[0].headline.print_headline + "<br>");
    $("#searchResults").append("2: " + response.response.docs[1].headline.print_headline  + "<br>");
    $("#searchResults").append("3: " + response.response.docs[2].headline.print_headline  + "<br>");
    $("#searchResults").append("4: " + response.response.docs[3].headline.print_headline  + "<br>");
    $("#searchResults").append("5: " + response.response.docs[4].headline.print_headline  + "<br>");
  
 console.log("ajax response", response.response.docs[0].headline);
})





     })
