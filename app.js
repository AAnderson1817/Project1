//VARIABLES
  //Game Object that contains metadata.
var game = {
    player1: {
        score: 0
    },
    player2: {
        score: 0
    },
    secretdocs: ['doc1', 'doc2', 'doc3'],
    timer: {
        count: 0
    },
}
game.currentPlayer = game.player1
    //Top Secret Text
var secretText = $('#topSecretDoc p').text();
    //Input Text
var inputText = getText();
    //Player 1 Score
var p1score = $('#player1score').text();
    //Player 2 Score
var p2score = $('#player2score').text();

var Timer = 0;

//MINIONS//
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

 function timeSecond(){
   game.timer.count +=1
 }

  //Function that increases score upon successful match.
function increaseScore() {
    game.currentPlayer.score += 1
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

//Mama Function. Executes a family of functions that compares the two bodies of text, increases score for the current player if necessary, switches turns, checks to see who the winner is, and declares them.
function processTurn() {
    if (compareText(inputText, secretText)) {
        increaseScore()
        console.log('Match!')
    } else {
        console.log('Nope!')
        switchTurn()
    }

    $('#inputText').val('')

}
//Function

// Event Listeners
$('#resetBtn').on('click', reset);
//Event listener for "Leak!" button.
$('#leakBtn').on('click' , getText);
$('#leakBtn').on('click', processTurn);
