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

movieApi();

//event lister for search button that adds text box content to the request url
var searchBtn = document.querySelector("#btn");
var searchInput = document.querySelector



searchBtn.addEventListener("click", movieApi);
// create funtion to print results

//vars for results that create elements to display results
//
var searchBtn = document.getElementById('btn');
var form = $('#form');

function getMovie(movie) {
  var requestMovieUrl = "http://www.omdbapi.com/?apikey=c6fae28f&s=" + movie + "&page=5&type=movie&y";
  fetch(requestMovieUrl).then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data);
    // for (var i = 0; i < data.length ; i++)
    $('#movie-list').text(data.Search[0].Title);
    $('#movieyear').text(data.Search[0].Year);
    $('#poster1').attr("src", data.Search[0].Poster);
    $('#movie-list2').text(data.Search[1].Title);
    $('#movieyear2').text(data.Search[1].Year);
    $('#poster2').attr("src", data.Search[1].Poster);
    $('#movie-list3').text(data.Search[2].Title);
    $('#movieyear3').text(data.Search[2].Year);
    $('#poster3').attr("src", data.Search[2].Poster);
    $('#movie-list4').text(data.Search[3].Title);
    $('#movieyear4').text(data.Search[3].Year);
    $('#poster4').attr("src", data.Search[3].Poster);
    $('#movie-list5').text(data.Search[4].Title);
    $('#movieyear5').text(data.Search[4].Year);
    $('#poster5').attr("src", data.Search[4].Poster);
  })
}

searchBtn.addEventListener("click", function(event){
  event.preventDefault();
  var movie = document.getElementById('search').value;
  movie.trim();
  console.log(movie);
  getMovie(movie);
  getQuote();
});


function getQuote() {
  var category = 'movies'
  $.ajax({
      method: 'GET',
      url: 'https://api.api-ninjas.com/v1/quotes?category=' + category,
      headers: { 'X-Api-Key': 'ziO2ZBLwqWNOc5uWji+jXg==RxSaAH1p3fJU353M'},
      contentType: 'application/json',
      success: function(result) {
          console.log(result);
          $('#quoteText').text(result[0].quote);
          $('#source-author').text(result[0].author);
      },
      error: function ajaxError(jqXHR) {
          console.error('Error: ', jqXHR.responseText);
      }
  });
};

function getQuote() {
  var category = 'movies'
  $.ajax({
      method: 'GET',
      url: 'https://api.api-ninjas.com/v1/quotes?category=' + category,
      headers: { 'X-Api-Key': 'ziO2ZBLwqWNOc5uWji+jXg==RxSaAH1p3fJU353M'},
      contentType: 'application/json',
      success: function(result) {
          console.log(result);
          $('#quoteText').text(result[0].quote);
          $('#source-author').text(result[0].author);
      },
      error: function ajaxError(jqXHR) {
          console.error('Error: ', jqXHR.responseText);
      }
  });
};