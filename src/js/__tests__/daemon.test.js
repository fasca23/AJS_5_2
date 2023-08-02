import Daemon from '../daemon';

test('Check Daemon', () => {
  const daemon = new Daemon('Вова');
  const correct = {
    name: 'Вова',
    type: 'Daemon',
    health: 100,
    level: 1,
    attack: 10,
    defence: 40,
  };
  expect(daemon).toEqual(correct);
});
