const fs = require('fs');
const { join } = require('path');
const createRecords = require('./createRecords');

const { FILE_NAME } = process.env;

const fitbs = fs.readFileSync(join(__dirname, `${FILE_NAME}.json`), 'utf-8');

createRecords({ fitbs, status: 'draft', tableName: 'FITBs' });

// dupes: 41, 58, 33, 55, 45
