
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
    $('#movie-list').text(data.Search[0].Title).addClass("outline");
    $('#movieyear').text(data.Search[0].Year).addClass("outline");
    $('#poster1').attr("src", data.Search[0].Poster);
    $('#movie-list2').text(data.Search[1].Title).addClass("outline");
    $('#movieyear2').text(data.Search[1].Year).addClass("outline");
    $('#poster2').attr("src", data.Search[1].Poster);
    $('#movie-list3').text(data.Search[2].Title).addClass("outline");
    $('#movieyear3').text(data.Search[2].Year).addClass("outline");
    $('#poster3').attr("src", data.Search[2].Poster);
    $('#movie-list4').text(data.Search[3].Title).addClass("outline");
    $('#movieyear4').text(data.Search[3].Year).addClass("outline");
    $('#poster4').attr("src", data.Search[3].Poster);
    $('#movie-list5').text(data.Search[4].Title).addClass("outline");
    $('#movieyear5').text(data.Search[4].Year).addClass("outline");
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

