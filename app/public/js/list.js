// lets get a data from the database
$.get("/api/all", function(data) {
//loop over the drinks that we have on a database
for (var i = 0; i < data.length; i++) {
    // Create div to hold the name of the drink and button
    var drink = $("<div>");
    var button = $("<button>");
    // Add a class (helps to edit the css part)
    drink.addClass("show-names show-recipes"+i);
    button.text("Show-Recipes");
    // Add an id 
    drink.attr("id", "display" + i);
    button.addClass("show-recipes");
    button.attr("data-i", i);
    $(".show-recipes").attr("src", data);
    // Append this to a cocktailist
    $("#cocktails-list").append(drink); 
    $("#cocktails-list").append(button); 
//add the the name of drinks to our page
// only the name of drink because we want to crate a link here to the recipes
$("#display" + i).append("<p class = 'drink-name'>" + (i + 1) + ". " + data[i].name + "</p>");
$(".show-recipes").on("click",function(){
    var i = $(this).attr("data-i");
	$(".show-recipes" + i).append("<p> :ingredient1 " + data[i].ingredient1 + "</p>");
	$(".show-recipes" + i).append("<p> :ingredient2 " + data[i].ingredient2 + "</p>");
	$(".show-recipes" + i).append("<p> :ingredient3 " + data[i].ingredient3 + "</p>");
	$(".show-recipes" + i).append("<p> :mixer " + data[i].mixer + "</p>");
	$(".show-recipes" + i).append("<p> :garnish " + data[i].garnish + "</p>");
	$(".show-recipes" + i).append("<p> :measure " + data[i].measure + "</p>");

})
}
});
