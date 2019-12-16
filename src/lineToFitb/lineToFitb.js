const SEPARATOR = '__BLANK__';

function lineToFitb({ id, line, tags }) {
  const parts = line.match(/\[(.*?)\]/g);

  const source = parts.reduce(
    (accumulator, current) => accumulator.replace(current, SEPARATOR),
    line
  );

  const examplesAndPrompts = parts
    .map(element => JSON.parse(element))
    .reduce(
      (accumulator, current) => {
        if (current[1]) {
          if (accumulator.examples === undefined) {
            accumulator.examples = [];
          }
          accumulator.examples.push(current[1]);
        }
        if (current[0]) {
          if (accumulator.prompts === undefined) {
            accumulator.prompts = [];
          }
          accumulator.prompts.push(current[0]);
        }
        return accumulator;
      },
      { examples: undefined, prompts: undefined }
    );

  return {
    ...examplesAndPrompts,
    id,
    source,
    tags
  };
}

module.exports = lineToFitb;
