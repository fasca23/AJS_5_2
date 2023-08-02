import Undead from '../undead';

test('Check Undead', () => {
  const undead = new Undead('Вова');
  const correct = {
    name: 'Вова',
    type: 'Undead',
    health: 100,
    level: 1,
    attack: 25,
    defence: 25,
  };
  expect(undead).toEqual(correct);
});
