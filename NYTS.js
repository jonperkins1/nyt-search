
$(document).ready(function(){

    var apiKey = "GtjLNczC810d4TJgtA4AwdApcoks5SHI"
    var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=" + query + "&api-key=" + apiKey
    var query = "SEARCH INPUT"
    
    $.ajax({
      url: queryURL,
      method: "GET"
    }).then(function(response) {
      console.log(response);
    });

})








