import Bowman from '../bowman';

test('Check Bowman', () => {
  const bowman = new Bowman('Вова');
  const correct = {
    name: 'Вова',
    type: 'Bowman',
    health: 100,
    level: 1,
    attack: 25,
    defence: 25,
  };
  expect(bowman).toEqual(correct);
});
