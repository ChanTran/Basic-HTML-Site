

$(document).ready(function() {
  $(".oneClicked").click(function() {
    $(".foodPicture").toggle(0);
    $(".foodText").toggle(0);
    $(".foodText").fadeIn(1000).html("Cowboy Cut Ribeye served with salad, mash potatoes and gravy");
    $(".foodPicture").toggle(1000).html('<img src="images/1.jpg" width="400" height="300">');
  });
  $(".twoClicked").click(function() {
    $(".foodPicture").toggle(0);
    $(".foodText").toggle(0);
    $(".foodText").fadeIn(1000).html("Barbeque roasted ribs with a side of fries");
    $(".foodPicture").toggle(1000).html('<img src="images/2.jpeg" width="400" height="300">');
  });
  $(".threeClicked").click(function() {
    $(".foodPicture").toggle(0);
    $(".foodText").toggle(0);
    $(".foodText").fadeIn(1000).html("Bacon wrapped beef fillet with aspharagus");
    $(".foodPicture").toggle(1000).html('<img src="images/3.jpg" width="400" height="300">');
  });
  $(".fourClicked").click(function() {
    $(".foodPicture").toggle(0);
    $(".foodText").toggle(0);
    $(".foodText").fadeIn(1000).html("Sea fresh salmon served on rice with a side of broccoli");
    $(".foodPicture").toggle(1000).html('<img src="images/4.jpeg" width="400" height="300">');
  });
  $(".fiveClicked").click(function() {
    $(".foodPicture").toggle(0);
    $(".foodText").toggle(0);
    $(".foodText").fadeIn(1000).html("Fresh chicken tenders and stuffed clams");
    $(".foodPicture").toggle(1000).html('<img src="images/5.jpg" width="400" height="300">');
  });
  
  $(".oneAppClicked").click(function() {
    $(".appetizerPicture").toggle(0);
    $(".appetizerText").toggle(0);
    $(".appetizerText").fadeIn(1000).html("Loaded Cactus Blossom");
    $(".appetizerPicture").toggle(1000).html('<img src="images/appetizer1.jpg" width="400" height="300">');
  });
  $(".twoAppClicked").click(function() {
    $(".appetizerPicture").toggle(0);
    $(".appetizerText").toggle(0);
    $(".appetizerText").fadeIn(1000).html("Stuffed Tuna Crisps");
    $(".appetizerPicture").toggle(1000).html('<img src="images/appetizer2.jpg" width="400" height="300">');
  });
  $(".threeAppClicked").click(function() {
    $(".appetizerPicture").toggle(0);
    $(".appetizerText").toggle(0);
    $(".appetizerText").fadeIn(1000).html("Garlic Cheddar Spread Bread");
    $(".appetizerPicture").toggle(1000).html('<img src="images/appetizer3.jpg" width="400" height="300">');
  });
  $(".fourAppClicked").click(function() {
    $(".appetizerPicture").toggle(0);
    $(".appetizerText").toggle(0);
    $(".appetizerText").fadeIn(1000).html("Battered Cod Fish");
    $(".appetizerPicture").toggle(1000).html('<img src="images/appetizer4.jpg" width="400" height="300">');
  });
  $(".fiveAppClicked").click(function() {
    $(".appetizerPicture").toggle(0);
    $(".appetizerText").toggle(0);
    $(".appetizerText").fadeIn(1000).html("Fresh Regular Cactus Blossom");
    $(".appetizerPicture").toggle(1000).html('<img src="images/appetizer5.jpg" width="400" height="300">');
  });
  
  $(".oneDessertClicked").click(function() {
    $(".dessertPicture").toggle(0);
    $(".dessertText").toggle(0);
    $(".dessertText").fadeIn(1000).html("Extra Chocolate Cake Fudge");
    $(".dessertPicture").toggle(1000).html('<img src="images/dessert1.jpg" width="400" height="300">');
  });
  $(".twoDessertClicked").click(function() {
    $(".dessertPicture").toggle(0);
    $(".dessertText").toggle(0);
    $(".dessertText").fadeIn(1000).html("Cinnamon Apple Oblivion");
    $(".dessertPicture").toggle(1000).html('<img src="images/dessert2.jpg" width="400" height="300">');
  });
  $(".threeDessertClicked").click(function() {
    $(".dessertPicture").toggle(0);
    $(".dessertText").toggle(0);
    $(".dessertText").fadeIn(1000).html("Strawberry Coat");
    $(".dessertPicture").toggle(1000).html('<img src="images/dessert3.jpg" width="400" height="300">');
  });
  $(".fourDessertClicked").click(function() {
    $(".dessertPicture").toggle(0);
    $(".dessertText").toggle(0);
    $(".dessertText").fadeIn(1000).html("Caramel Flan Cake");
    $(".dessertPicture").toggle(1000).html('<img src="images/dessert4.jpg" width="400" height="300">');
  });
  $(".fiveDessertClicked").click(function() {
    $(".dessertPicture").toggle(0);
    $(".dessertText").toggle(0);
    $(".dessertText").fadeIn(1000).html("New York Style Cheesecake");
    $(".dessertPicture").toggle(1000).html('<img src="images/dessert5.jpeg" width="400" height="300">');
  });
  
  $("#question").click(function () {
    $('select option:contains("I want dynamic topics to be displayed based off of the first choice above")').text('Opening and Closing Hours');
  });
  
  $(".oneDrinkClicked").click(function() {
    $(".drinksPicture").toggle(0);
    $(".drinksText").toggle(0);
    $(".drinksText").fadeIn(1000).html("Gatsby Cocktail");
    $(".drinksPicture").toggle(1000).html('<img src="images/drink1.jpg" width="400" height="300">');
  });
  $(".twoDrinkClicked").click(function() {
    $(".drinksPicture").toggle(0);
    $(".drinksText").toggle(0);
    $(".drinksText").fadeIn(1000).html("Braveheart Cocktail");
    $(".drinksPicture").toggle(1000).html('<img src="images/drink2.jpg" width="400" height="300">');
  });
  $(".threeDrinkClicked").click(function() {
    $(".drinksPicture").toggle(0);
    $(".drinksText").toggle(0);
    $(".drinksText").fadeIn(1000).html("Various Wines");
    $(".drinksPicture").toggle(1000).html('<img src="images/drink3.jpg" width="400" height="300">');
  });
  $(".fourDrinkClicked").click(function() {
    $(".drinksPicture").toggle(0);
    $(".drinksText").toggle(0);
    $(".drinksText").fadeIn(1000).html("Various Wines and More!");
    $(".drinksPicture").toggle(1000).html('<img src="images/drink4.jpg" width="400" height="300">');
  });
  
});