const fs = require('fs');
const { join } = require('path');
const lineToFitb = require('./lineToFitb');

const { FILE_NAME } = process.env;

const lines = fs
  .readFileSync(join(__dirname, `${FILE_NAME}.txt`), 'utf-8')
  .split('\n')
  .filter(Boolean);

const fitbs = lines.map((line, index) =>
  lineToFitb({ id: index.toString(), line })
);

fs.writeFileSync(
  join(__dirname, `${FILE_NAME}.json`),
  JSON.stringify(fitbs, 0, 2)
);
