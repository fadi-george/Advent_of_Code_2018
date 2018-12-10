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
    counts = Object.values(counts);

    twoLetterCount += counts.includes(2);
    threeLetterCount += counts.includes(3);
  });
  return twoLetterCount * threeLetterCount;
};

// words given are in lowercase format and of equal lengths
const part2 = () => {
  let len = data[0].length;
  for (let i = 0; i < data.length; i++) {
    for (let j = 0; j < data.length; j++) {
      // checkign word differences
      let result = '';
      for (let k = 0; k < len; k++) {
        if (data[i][k] === data[j][k]) {
          result += data[i][k];
        }
      }

      if (result.length === len - 1) {
        return result;
      }
    }
  }
};

console.log('Part 1: ', part1());
console.log('Part 2: ', part2());
