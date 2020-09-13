/**
 * @param {character[][]} board
 * @return {number}
 */
var countBattleships = function (board) {
  let count = 0;

  const dfs = (x, y) => {
    if (
      x < 0 ||
      x >= board.length ||
      y < 0 ||
      y >= board[0].length ||
      board[x][y] === '.'
    ) {
      return;
    } else {
      board[x][y] = '.';
      dfs(x, y - 1);
      dfs(x, y + 1);
      dfs(x - 1, y);
      dfs(x + 1, y);
    }
  };

  for (let x = 0; x < board.length; x++) {
    for (let y = 0; y < board[0].length; y++) {
      if (board[x][y] === 'X') {
        count++;
        dfs(x, y);
      }
    }
  }
  return count;
};
