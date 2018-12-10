import path from 'path';
import { fileToArray } from '../utils/readFile';

const data = fileToArray(path.join(__dirname, './input.txt'));

// solutions
const part1 = () => {
  const claimSet = new Set();
  const overlapSet = new Set();
  data.forEach((claim) => {
    const claimInfo = claim.match(/^#\d+ @ (\d+),(\d+): (\d+)x(\d+)$/);
    for (let r = 0; r < claimInfo[3]; r++) {
      for (let c = 0; c < claimInfo[4]; c++) {
        const posStr = `${+claimInfo[1] + r},${+claimInfo[2] + c}`;
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
    const claimInfo = claim.match(/^#(\d+) @ (\d+),(\d+): (\d+)x(\d+)$/);
    claimIDSet.add(claimInfo[1]);

    for (let r = 0; r < claimInfo[4]; r++) {
      for (let c = 0; c < claimInfo[5]; c++) {
        const posStr = `${+claimInfo[2] + r},${+claimInfo[3] + c}`;
        if (matchIDs[posStr]) {
          matchIDs[posStr].push(claimInfo[1]);

          matchIDs[posStr].forEach((id) => {
            claimIDSet.delete(id);
          });
        } else {
          matchIDs[posStr] = [claimInfo[1]];
        }
      }
    }
  });
  return [...claimIDSet][0];
};

console.log('Part 1: ', part1());
console.log('Part 2: ', part2());
