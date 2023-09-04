const readline = require('readline');

const r1 = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
r1.question('Welcome to Holberton School, what is your name?\n', (names) => {
  console.log(`Your name is: ${names}`);
  r1.close();
});
r1.on('close', () => {
  console.log('This important software is now closing \n');
});
