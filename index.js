var prompt = require('prompt');
var printBoard = require('./boardHelper.js');

// 
// Start the prompt 
// 
prompt.start();

// 
// Get two properties from the user: username and email 
// 
class Game {
  constructor() {
    this.board = [[' ', ' ', ' '], [' ', ' ', ' '], [' ', ' ', ' ']];
    this.winner = 'cat';

  }

  runGame() {
    var player = 'player1';
    this.nextTurn(player);

  }
  
  markX(coordinates) {
    //check to see if coordinate is valid and only mark if it is
    this.board[coordinates[1]][coordinates[0]] = 'X';
  }
  
  markO(coordinates) {
    //check to see if coordinate is valid and only mark if it is
    this.board[coordinates[1]][coordinates[0]] = 'O';
  }
  boardState() {
    printBoard(this.board);
  }
  nextTurn(player) {
    var context = this;
    console.log('please enter x, y coordinates', player);

    if (this.checkWin()) {
      prompt.get(['x', 'y'], function (err, result) {


        if (player === 'player1') {
          context.markX([result.x, result.y]);
          context.boardState();
          context.nextTurn('player2');
        } else {
          context.markO([result.x, result.y]);
          context.boardState();
          context.nextTurn('player1');
        }

      }) 
    } else {
      console.log('GAME OVER!!!', context.winner, 'is the winner');
    }
  }
  checkWin() {
    
    //check to see if board is full
    var emptySpaces = 9
    for (var i in this.board) {
      for (var j in this.board) {
        if (this.board[i][j] !== ' ') {
          emptySpaces--;
        }
      }
    }

    if (emptySpaces === 0) {
      return false;
    }


    //check for X/Os in horizontals, verticals and diagonals
    


    //check if board is full
    

    //if game is not over, return true
    return true;
  }
}

var newGame = new Game();
newGame.boardState();
newGame.runGame();



