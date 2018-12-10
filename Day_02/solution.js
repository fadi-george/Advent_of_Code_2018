import path from 'path';
import { fileToArray } from '../utils/readFile';

const data = fileToArray(path.join(__dirname, './input.txt'));

// solutions
// words given are in lowercase format
const part1 = () => {
  let twoLetterCount = 0;
  let threeLetterCount = 0;

  data.forEach((word) => {
    let counts = {};
    [...word].forEach((letter) => {
      counts[letter] = (counts[letter] || 0) + 1;
    });

    let countedTwo = false;
    let countedThree = false;
    Object.keys(counts).some((key) => {
      if (!countedTwo && counts[key] === 2) {
        twoLetterCount++;
        countedTwo = true;
      }
      if (!countedThree && counts[key] === 3) {
        threeLetterCount++;
        countedThree = true;
      }
      return countedTwo && countedThree;
    });
  });
  return twoLetterCount * threeLetterCount;
};

// words given are in lowercase format and of equal lengths
const part2 = () => {
  for (let i = 0; i < data.length; i++) {
    for (let j = 0; j < data.length; j++) {
      // checkign word differences
      const startID = data[i];
      const endID = data[j];
      let diffOneCount = 0;

      let diffIndex = -1;
      for (let k = 0; k < startID.length; k++) {
        let chDiff = Math.abs(startID.charCodeAt(k) - endID.charCodeAt(k));
        if (chDiff !== 0) {
          diffOneCount++;
          diffIndex = k;
          if (diffOneCount > 1) {
            break;
          }
        }
      }

      if (diffOneCount === 1) {
        return [...startID].filter((_, index) => index !== diffIndex).join('');
      }
    }
  }
};

console.log('Part 1: ', part1());
console.log('Part 2: ', part2());
