const SEPARATOR = '__BLANK__';

function lineToFitb({ id, line }) {
  const parts = line.match(/\[(.*?)\]/g);

  const source = parts.reduce(
    (accumulator, current) => accumulator.replace(current, SEPARATOR),
    line
  );

  const examplesAndPrompts = parts
    .map(element => JSON.parse(element))
    .reduce(
      (accumulator, current) => {
        accumulator.examples.push(current[1]);
        accumulator.prompts.push(current[0]);
        return accumulator;
      },
      { examples: [], prompts: [] }
    );

  return {
    ...examplesAndPrompts,
    id,
    source,
    tags: []
  };
}

module.exports = lineToFitb;
