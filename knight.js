export default class Knight {
  constructor(currentSpace) {
    this.currentSpace = currentSpace;
    this.aList = [];
    this.populateAList();
  }

  populateAList() {
    const [x, y] = this.currentSpace;
    const moves = [
      [x + 2, y + 1],
      [x + 2, y - 1],
      [x + 1, y - 2],
      [x - 1, y - 2],
      [x - 2, y - 1],
      [x - 2, y + 1],
      [x - 1, y + 2],
      [x + 1, y + 2],
    ];
    moves.forEach((move) => {
      const [x, y] = move;
      if (x >= 0 && x <= 7 && y >= 0 && y <= 7) {
        this.aList.push(move);
      }
    });
  }
}
