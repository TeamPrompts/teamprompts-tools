const Airtable = require('airtable');
require('dotenv').config();

const { AIRTABLE_API_KEY, AIRTABLE_APP_ID } = process.env;

const base = new Airtable({ apiKey: AIRTABLE_API_KEY }).base(AIRTABLE_APP_ID);

function createRecords({ fitbs, status, tableName }) {
  const data = JSON.parse(fitbs)
    .map(fitb => ({
      fields: {
        Examples: JSON.stringify(fitb.examples),
        FITB: fitb.source,
        Prompts: JSON.stringify(fitb.prompts),
        Status: status,
        Tags: fitb.tags
      }
    }))
    .reduce(
      (accumulator, current) => {
        if (
          !accumulator[accumulator.length - 1] ||
          accumulator[accumulator.length - 1].length === 10
        ) {
          accumulator.push([]);
        }
        accumulator[accumulator.length - 1].push(current);
        return accumulator;
      },
      [[]]
    );

  data.forEach(element => {
    base(tableName).create(element, (error, records) => {
      if (error) {
        console.error(error);
        return;
      }
      records.forEach(record => {
        console.log(record.getId());
      });
    });
  });
}

module.exports = createRecords;
