
//sets a random goal number, set's player number
var goalNumber = Math.floor(Math.random() * 100) + 1;
var playerNumber = 0;
var wins = localStorage.getItem("wins");
var losses = localStorage.getItem("losses");

//if there is no variable for wins or losses in local storage, it is set to zero
//else, the "wins" from local storage is achieved and put into the wins variable in
//the script
if (wins === null) {
  wins = 0;
}
 


if (losses === null)
{
  losses = 0;
}

console.log("Wins:" + wins);
console.log("Losses:" + losses);
//this value does not change!!!  WTF!?

$("#wins").text(wins);

$("#losses").text(losses);
//okay, now it persists, but it ONLY updates after you refresh the page.  So...



//gives a random value to blue, green, red, and purple
 var blue = Math.floor(Math.random() * 12) + 1;
 var green = Math.floor(Math.random() * 12) + 1;
 var red = Math.floor(Math.random() * 12) + 1;
 var purple = Math.floor(Math.random() * 12) + 1; 


//assigns value to the gem pics based on above random numbers
$("#blueGem").attr("value", blue);
$("#greenGem").attr("value", green);
$("#redGem").attr("value", red);
$("#purpleGem").attr("value", purple);


//puts goal number variable in goal number box
$("#goalNumber").text(goalNumber);

//puts player number variable in player box
$("#playerNumber").text(playerNumber);

//puts wins in wins box (ccurrently at zero)
// $("#wins").text(wins);

// //puts losses in losses box
// $("#losses").text(losses);


//when you click one of the gems
  $("img").click(function(){
  //playerNumber equals whatever it was before plus the value of the gem
  playerNumber = playerNumber + parseInt($(this).attr("value"));
  

  if (playerNumber == goalNumber)
  {
    //if the player number meets the goal number,
    //a non-existent varaible called wins is incremented.
    //see, how do I set up wins, without having it reset every refresh!?
    //So maybe check if there's already a value in local storage, and if not, assign it to
    //zero.
    //So at the top of the page "if wins in localstorage = true, wins = localStorage.getItem(wins)"
    //else, wins = 0.
    wins++;

    localStorage.setItem("wins", wins);
    
    var x = screen.width/2 - 500/2;
    var y = screen.height/2 - 350/2;
    window.open("win.html", "_blank",'height=385,width=500,left='+x+',top='+y);

//if you win, goal number is reset, player number is reset, and so are gem values
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
    
    $("#wins").text(wins);
  }

  if (playerNumber > goalNumber)
  {
    losses++;

    localStorage.setItem("losses", losses);
  
    var x = screen.width/2 - 500/2;
    var y = screen.height/2 - 350/2;
    window.open("loss.html", "_blank",'height=385,width=500,left='+x+',top='+y);

//if you lose, all those numbers are reset as well.     
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

$("#losses").text(losses);
  }

//this displays the playerNumber and goalNumber in their appropriate divs after each click
$("#goalNumber").text(goalNumber);

$("#playerNumber").text(playerNumber);

// $("#wins").text(wins);

// $("#losses").text(losses);






//this extracts them from local storage to be printed.
// $("#wins").text(wins);

// $("#losses").text(losses);

//now the problem is once you hit refresh, wins and losses go back to zero.  Is that because
//the computer starts reading from the top again?



  

});


  $("button").click(function(){
    confirm("Are you sure you want to delete your stats?");

    if(confirm)
    {
      localStorage.clear();
      //it's just as if nothing happens
      console.log("Local storage is supposed to be cleared");
      console.log(localStorage.getItem("losses"));
      //so it seems to work, but the text doesn't update, unless you hit refresh
      // $("#losses").text("0");
      // $("#wins").text("0");
      //yet even writing it this way doesn't work, wtf!?
      //okay, let's try manually refreshing the page.
      location.reload();

    }
  })

