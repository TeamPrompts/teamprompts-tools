const lineToFitb = require('./lineToFitb');

test('lineToFitb', () => {
  const line =
    'I am writing something here about ["topic","golf"] and the key question is ["question","whether we will go to the party"].';

  const fitb = lineToFitb({ id: Date.now().toString(), line });

  expect(fitb).toMatchSnapshot({ id: expect.any(String) });
});
