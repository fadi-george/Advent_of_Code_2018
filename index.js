const solutionFile = `Day_${process.env.day}/solution.js`;
const exec = require('child_process').exec;

exec(`babel-node ${solutionFile}`, (err, stdout, stderr) => {
  if (err) console.error(err);
  console.log(stdout);
  console.log(stderr);
});
