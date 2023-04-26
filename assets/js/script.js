// movie api request
var requestMovieUrl = "http://www.omdbapi.com/?apikey=c6fae28f&s=avatar";

function movieApi() {
  fetch(requestMovieUrl)
    .then(function (response) {
      console.log(response);
      return response.json();
    })
    .then(function (data) {
      console.log(data);
    });
}

//event lister for search button that adds text box content to the request url
var searchBtn = document.querySelector("#btn");
var searchInput = document.querySelector



searchBtn.addEventListener("click", movieApi);
// create funtion to print results

//vars for results that create elements to display results
//