
$("#add-btn").on("click", function(event) {
  event.preventDefault();
  var cocktail = $("#cocktail-search").val().trim();
  // Make an AJAX get request to our api, including the user's book in the url
  $.get("/api/" + cocktailSearched, function(data) {
    console.log(data);
    // Call our renderBooks function to add our books to the page
    render tipple(data);

  });

});



