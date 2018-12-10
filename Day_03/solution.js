import path from 'path';
import { fileToArray } from '../utils/readFile';

const data = fileToArray(path.join(__dirname, './input.txt'));

// solutions
const part1 = () => {
  const claimSet = new Set();
  const overlapSet = new Set();
  data.forEach((claim) => {
    const [_, colOffset, rowOffset, width, height] = claim.match(/\d+/g);
    for (let r = 0; r < height; r++) {
      for (let c = 0; c < width; c++) {
        const posStr = `${+rowOffset + r},${+colOffset + c}`;
        if (claimSet.has(posStr)) {
          overlapSet.add(posStr);
        } else {
          claimSet.add(posStr);
        }
      }
    }
  });

  return overlapSet.size;
};

const part2 = () => {
  const matchIDs = {};
  const claimIDSet = new Set();
  data.forEach((claim) => {
    const [claimID, colOffset, rowOffset, width, height] = claim.match(/\d+/g);
    claimIDSet.add(claimID);

    for (let r = 0; r < height; r++) {
      for (let c = 0; c < width; c++) {
        const posStr = `${+rowOffset + r},${+colOffset + c}`;
        if (matchIDs[posStr]) {
          matchIDs[posStr].push(claimID);
          matchIDs[posStr].forEach((id) => {
            claimIDSet.delete(id);
          });
        } else {
          matchIDs[posStr] = [claimID];
        }
      }
    }
  });
  return [...claimIDSet][0];
};

console.log('Part 1: ', part1());
console.log('Part 2: ', part2());
