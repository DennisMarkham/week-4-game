

var goalNumber = Math.floor(Math.random() * 100) + 1;
var playerNumber = 0;
var wins = 0;
var losses = 0;

 var blue = Math.floor(Math.random() * 10) + 1;
 var green = Math.floor(Math.random() * 10) + 1;
 var red = Math.floor(Math.random() * 10) + 1;
 var purple = Math.floor(Math.random() * 10) + 1; 

$("#blueGem").attr("value", blue);
$("#greenGem").attr("value", green);
$("#redGem").attr("value", red);
$("#purpleGem").attr("value", purple);


$("#goalNumber").text(playerNumber);

$("#playerNumber").text(goalNumber);

$("#wins").text(wins);

$("#losses").text(losses);


  $("img").click(function(){
  playerNumber = playerNumber + parseInt($(this).attr("value"));
  

  if (playerNumber == goalNumber)
  {
    wins++;
    // window.open("win.html", "_blank", "left=500, width=400,height=400");
    var x = screen.width/2 - 500/2;
    var y = screen.height/2 - 350/2;
    window.open("win.html", "_blank",'height=385,width=500,left='+x+',top='+y);

goalNumber = Math.floor(Math.random() * 120) + 1;
playerNumber = 0;


 blue = Math.floor(Math.random() * 12) + 1;
 green = Math.floor(Math.random() * 12) + 1;
 red = Math.floor(Math.random() * 12) + 1;
 purple = Math.floor(Math.random() * 12) + 1; 

$("#blueGem").attr("value", blue);
$("#greenGem").attr("value", green);
$("#redGem").attr("value", red);
$("#purpleGem").attr("value", purple);
    
  }

  if (playerNumber > goalNumber)
  {
    losses++;
    // window.open("loss.html", "_blank", "left=500, width=400,height=400");
    var x = screen.width/2 - 500/2;
    var y = screen.height/2 - 350/2;
    window.open("loss.html", "_blank",'height=385,width=500,left='+x+',top='+y);
    
goalNumber = Math.floor(Math.random() * 100) + 1;
playerNumber = 0;

blue = Math.floor(Math.random() * 10) + 1;
green = Math.floor(Math.random() * 10) + 1;
red = Math.floor(Math.random() * 10) + 1;
purple = Math.floor(Math.random() * 10) + 1; 

$("#blueGem").attr("value", blue);
$("#greenGem").attr("value", green);
$("#redGem").attr("value", red);
$("#purpleGem").attr("value", purple);
  }

$("#goalNumber").text(playerNumber);

$("#playerNumber").text(goalNumber);

$("#wins").text(wins);

$("#losses").text(losses);

console.log("Blue:" + blue + " Green:" + green + " Red:" + red + " Purple:" + purple);
console.log("Goal number: " + goalNumber + " Player number: " + playerNumber);
console.log("Wins: " + wins + " Losses: " + losses);
  

});
