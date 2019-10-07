

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

    $("#searchResults").append(JSON.stringify(response));
  
 console.log("ajax response", response);
})





     })
