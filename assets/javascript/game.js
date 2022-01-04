

<!DOCTYPE html>
<html lang="en-us">
  <head>
    <meta charset="UTF-8">
    <title>Crystal Collector</title>
<link rel="stylesheet" type="text/css" href="assets/css/sassitize.css">

<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>

<meta name="viewport" content="width=device-width, initial-scale=1.0">


    
  </head>
  <body>
  <div id = "whole">
  <h1>Crystal Collector</h1>  
  
  <div class = "grayBox" id = "instructions">
  <p>Each crystal has been given a random number value.  Click the crystal to add
  its value to your total.  If you can match the goal, you win.  If you exceed it,
  you will lose.  Eitherway, the game will restart. <b>New Feature: Wins and losses will be tracked persistently!
  However, feel free to clear your stats at any time.</b></p>
  </div>

  <div class = "grayBox" id = "playerNumberBox">
  <span id = "playerNumber">
  </span>
  </div>

  <div class = "grayBox" id = "goalNumberBox">
  <span id = "goalNumber">
  </span>
</div>

  
  
 
 <div id="gems">
 <img id ="blueGem" class = "gem" src = "assets/images/blueGem.png" alt = "blue gem">
 <img id ="greenGem" class = "gem" src ="assets/images/greenGem.png" alt = "green gem">
 <img id = "redGem" class = "gem" src = "assets/images/redGem.png" alt = "red gem">
 <img id = "purpleGem" class = "gem" src = "assets/images/purpleGem.png" alt = "purple gem">
</div>

<div class = "grayBox" id ="winLossBox">
Wins: <span id = "wins">0
  </span>
  <br>

Losses: <span id = "losses">0
  </span>
</div>
<br>
<button id = "clear"> Clear Stats?</button>
</div>

<script src="assets/javascript/game.js"></script>
 
  </body>
</html>
