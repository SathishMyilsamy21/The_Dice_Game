// PLAYER 1

var randomNumber1 = Math.floor(Math.random() * 6) + 1; // 1 - 6

var randomDiceImage1 = "dice" + randomNumber1 + ".png"; // files of the images folder

var randomImageSource1 = "images/" + randomDiceImage1; // images folder to access the dice files

var image1 = document.querySelectorAll("img")[0]; // player 1 dice

image1.setAttribute("src", randomImageSource1); // source of the images folder

// PLAYER 2

var randomNumber2 = Math.floor(Math.random() * 6) + 1;

var randomDiceImage2 = "dice" + randomNumber2 + ".png";

var randomImageSource2 = "images/" + randomDiceImage2;

var image2 = document.querySelectorAll("img")[1]; // player 2 dice

image2.setAttribute("src", randomImageSource2);

// WHICH PLAYER WINS?

if (randomNumber1 > randomNumber2) {
  document.querySelector(".title").innerHTML = "🚩Player 1 Wins!";
} else if (randomNumber1 < randomNumber2) {
  document.querySelector(".title").innerHTML = "Player 2 Wins!🚩";
} else {
  document.querySelector(".title").innerHTML = "Draw!";
}
