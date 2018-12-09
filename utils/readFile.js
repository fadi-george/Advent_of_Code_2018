const fs = require('fs');

export const fileToArray = (fileName) => {
  return fs
    .readFileSync(fileName, 'utf8')
    .split('\r\n')
    .filter((str) => str);
};
