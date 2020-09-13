/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function (grid) {
  let count = 0; // 记录岛屿的数量
  const dfs = (x, y) => {
    // 越界检查
    if (
      x < 0 ||
      x >= grid.length ||
      y < 0 ||
      y >= grid[0].length ||
      grid[x][y] === '0'
      //注意最后一个条件也不需要处理
    ) {
      return;
    } else {
      //说明碰到了“1”
      grid[x][y] = '0';
      dfs(x, y - 1);
      dfs(x, y + 1);
      dfs(x - 1, y);
      dfs(x + 1, y);
    }
  };
  // 遍历地图
  for (let x = 0; x < grid.length; x++) {
    for (let y = 0; y < grid[0].length; y++) {
      // 如果找到了陆地
      if (grid[x][y] === '1') {
        // 就先记录下来
        count++;
        // 然后在当前的位置进行深搜
        dfs(x, y);
      }
    }
  }
  return count;
};
