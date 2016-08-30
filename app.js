//VARIABLES
  //Game Object that contains metadata.
var game = {
    player1: {
        score: 0
    },
    player2: {
        score: 0
    },
    secretDocs: ["Dale Gribble: 221-456-7152", "Clinton.exe (function getInfo(x){...}", "They're taking the Hobbits to Isengard!","Po ta toes. Po ta toes.","You're a mean one, Mr. Grinch.","I wanna dance with somebody. I wanna feel the heat with somebody. Yeah, I wanna dance with somebody. With somebody who loves me.","These are not the files you're looking for.","Minimum Viable Product."],
    timer: {
        count: 0
    },
}
game.currentPlayer = game.player1
    //Top Secret Text
var secretText = $('#topSecretDoc').text();
    //Input Text
var inputText = getText();
    //Player 1 Score
var p1score = game.player1.score
    //Player 2 Score
var p2score = game.player2.score

var timerTime = setInterval(function(){
  game.timer.count = game.timer.count + 1
  console.log(game.timer.count)
  $('#timer').text(game.timer.count)
}, 1000)


//MINIONS//
  //Function that replaces the text in the secretText field with something from the secretDocs array.
  function replaceLeak(){
    // secretText = game.secretDocs[1]
    $('#topSecretDoc').text(game.secretDocs[1]);
    secretText = game.secretDocs[1]
  }


  //Function that retrives the text value.
function getText() {
    inputText = $('#textInput').val()
    return inputText
}

  //Function that compares user input to Secret Text.
function compareText(x , y) {
    if (x == y) {
        return true;
    } else {
        return false;
    }
}

 //function timeSecond(){
   //game.timer.count +=1
 //}

  //Function that increases score upon successful match.
function increaseScore() {
    game.currentPlayer.score += 1
    $('#player1score').text(game.player1.score)
    $('#player2score').text(game.player2.score)
}

  // Function that switches turns:
function switchTurn() {
    if (game.currentPlayer == game.player1) {
        game.currentPlayer = game.player2
    } else {
        game.currentPlayer = game.player1
    }
}

// Reset Game:
function reset() {
    game.player1.score = 0;
    game.player2.score = 0;
    $('#player1score').text(game.player1.score)
    $('#player2score').text(game.player2.score)
    console.log('Works!')
}
  //Function that checks to see if either player score has reached 10.
  function checkScore1(p1){
    if (game.player1.score == 10) {
      alert('One is Snowden!')
    }
  }
  //P2 checkScore
  function checkScore2(p1){
    if (game.player2.score == 10) {
      alert('Two is Snowden!')
    }
  }
  //FISHER YATES SHUFFLE
function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}
//Mama Function. Executes a family of functions that compares the two bodies of text, increases score for the current player if necessary, switches turns, checks to see who the winner is, and declares them.
function processTurn() {
    if (compareText(inputText, secretText)) {
        shuffle(game.secretDocs)
        replaceLeak()
        increaseScore()
        console.log('Match!')
        checkScore1()
        checkScore2()
    } else {
        console.log('Nope!')
        switchTurn()
    }

    $('#inputText').val('')

}

//New Function

// Event Listeners
$('#resetBtn').on('click', reset);
//Event listener for "Leak!" button.
$('#leakBtn').on('click' , getText);
$('#leakBtn').on('click' , processTurn);
$('#strtBtn').on('click' , reset);




//TEST functions

game.secretDocs[Math.round(Math.random*game.secretDocs.length)]
