

var printBoard = function(board) {

  
  console.log('     ' + board[0][0] + '|' + board[1][0] + '|' + board[2][0]);
  console.log('     ' + '-----');
  console.log('     ' + board[0][1] + '|' + board[1][1] + '|' + board[2][1]);
  console.log('     ' + '-----');  
  console.log('     ' + board[0][2] + '|' + board[1][2] + '|' + board[2][2]);

}



//printBoard([['O', 'O', 'X'], ['X', 'O', 'X'], ['O', 'X', 'O']]);

module.exports = printBoard;