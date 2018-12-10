import path from 'path';
import { fileToArray } from '../utils/readFile';

const data = fileToArray(path.join(__dirname, './input.txt'));

// solutions
const part1 = () => data.reduce((acc, curr) => acc + Number(curr), 0);

const part2 = () => {
  const repeatSet = new Set([0]);
  let frequency = 0;
  let found = false;

  while (!found) {
    for (let i = 0; i < data.length; i++) {
      frequency += Number(data[i]);
      if (repeatSet.has(frequency)) {
        return frequency;
      }
      repeatSet.add(frequency);
    }
  }
};

console.log('Part 1: ', part1());
console.log('Part 2: ', part2());
