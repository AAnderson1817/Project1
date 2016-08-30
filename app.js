//VARIABLES
  //Game Object that contains metadata.
var game = {
    player1: {
        score: 0
    },
    player2: {
        score: 0
    },
    secretDocs: ["1st Leak Here", "Second Leak Here", "Third Leak Here","Forth Leak Here","Fifth Leak Here","Sixth Leak Here","Seventh Leak Here","Eigth Leak Here","Ninth Leak Here"],
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
var p1score = $('#game.player1.score').val()
    //Player 2 Score
var p2score = $('#game.player2.score').val()

var timerTime = setInterval(function(){game.timer.count = game.timer.count + 1}, 1000)

//MINIONS//
  //Function that replaces the text in the secretText field with something from the secretDocs array.
  function replaceLeak(){
    // secretText = game.secretDocs[1]
    secretText = $('#topSecretDoc').text(game.secretDocs[1]);
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
    $('#player1score').text=game.player1.score
    $('#player2score').text=game.player2.score
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
}
  //Function that checks to see if either player score has reached 10.
  function checkScore(p1){
    if (game.player1.score == 10) {
      alert('One is Snowden!')
    }else {
      console.log('One is not Snowden')
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
        checkScore()
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
$('#leakBtn').on('click', processTurn);





//TEST functions

game.secretDocs[Math.round(Math.random*game.secretDocs.length)]
