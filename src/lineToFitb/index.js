const fs = require('fs');
const { join } = require('path');
const lineToFitb = require('./lineToFitb');

const { FILE_NAME } = process.env;

const lines = fs
  .readFileSync(join(__dirname, `${FILE_NAME}.txt`), 'utf-8')
  .split('\n')
  .filter(Boolean);

const fitbs = lines.map((line, index) =>
  lineToFitb({
    id: index.toString(),
    line,
    tags: ['recG0ANQWrp3SRvvY', 'rechbGc1FLmwxb9Hg', 'recWU3KLlRvtGhOIM']
  })
);

fs.writeFileSync(
  join(__dirname, `../createRecords/${FILE_NAME}.json`),
  JSON.stringify(fitbs, 0, 2)
);

// recG0ANQWrp3SRvvY: decision making
// rechbGc1FLmwxb9Hg: measurement
// recWU3KLlRvtGhOIM: research
