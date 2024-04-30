import Knight from './knight.js';

export default function knightMoves(
  startSpace,
  endSpace,
  movesTaken = 0,
  queue = [[startSpace, []]],
) {
  movesTaken++;
  const [endX, endY] = endSpace;
  const levelLength = queue.length;
  for (let i = 0; i < levelLength; i++) {
    const [currentSpace, currentPath] = queue.shift();
    currentPath.push(currentSpace);
    const knight = new Knight(currentSpace);
    if (knight.aList.find((move) => move[0] === endX && move[1] === endY)) {
      currentPath.push(endSpace);
      console.log(
        `To reach it's final destination, the knight moved ${movesTaken} times!`,
      );
      console.log('The path taken was:');
      currentPath.forEach((space) => {
        console.log(`[${space}]`);
      });
      return;
    }
    for (let j = 0; j < knight.aList.length; j++) {
      queue.push([knight.aList[j], [...currentPath]]);
    }
  }
  knightMoves(queue[0], endSpace, movesTaken, queue);
}
