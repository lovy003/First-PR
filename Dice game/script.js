var randomNumber1 = Math.floor(Math.random()*6) + 1; //  for dice 1

var diceRandomImage = "dice" + randomNumber1 + ".png";

var randomImageSource = "images/" + diceRandomImage;

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src",randomImageSource);

//for dice 2

var randomNumber2 = Math.floor(Math.random()*6) + 1;

var diceRandomImage2 = "dice" + randomNumber2 + ".png";

var randomImageSource2 = "images/" + diceRandomImage2;

var image2 = document.querySelectorAll("img")[1];

image2.setAttribute("src",randomImageSource2);

// for text changing of refresh me

if(randomNumber1 > randomNumber2){
  document.querySelector("h1").innerHTML = "Player 1 Wins🚩";
}

else if(randomNumber1 == randomNumber2){
  document.querySelector("h1").innerHTML = "Oops a draw!!";
}

else if(randomNumber1 < randomNumber2){
  document.querySelector("h1").innerHTML = "Player 2 Wins🚩";
}
