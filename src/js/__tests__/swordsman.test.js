import Swordsman from '../swordsman';

test('Check Swordsman', () => {
  const swordsman = new Swordsman('Вова');
  const correct = {
    name: 'Вова',
    type: 'Swordsman',
    health: 100,
    level: 1,
    attack: 40,
    defence: 10,
  };
  expect(swordsman).toEqual(correct);
});
