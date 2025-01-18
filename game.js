let gameIdGenerator = 1;

constructor(rows, cols) {
    this.rows=
    this.columns=
    this.grid = Array.from({ length: rows }, () => Array(cols).fill("_"));
    this.players = [];
    this.step = 0;
    this.winningPosition = {
        x: Math.floor(Math.random() * rows),
        y: Math.floor(Math.random() * cols),
      };
    this.grid[this.winningPosition.x][this.winningPosition.y] = "X";

}
addPlayer(player) {
    player.placePlayer(this.rows, this.cols, this.grid);
    this.players.push(player);
    this.grid[player.xCoordinate][player.yCoordinate] = player.id;
  }

static create(rows, cols) {
    return new Game(rows, cols);
  }


  
  static create(rows, cols) {
    return new Game(rows, cols);
  }
  playNextStep() {
    this.playNextStep()++;
  }
check win()
{}
start() {
   
    this.playNextStep();
  }
displayGrid() {
}
checkCollision()
{}


start() {
    //console.log(`\nGame[${this.gameId}]:\n`);
    //this.displayGrid();
    // console.log(
    //   `Game ${String(this.gameId).padStart(3, "0")} winning coordinate (${
    //     this.winningPosition.x
    //   },${this.winningPosition.y})\n`
    // );
    this.playNextStep();
  }