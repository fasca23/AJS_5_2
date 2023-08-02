import Magician from '../magician';

test('Check Magician', () => {
  const magician = new Magician('Вова');
  const correct = {
    name: 'Вова',
    type: 'Magician',
    health: 100,
    level: 1,
    attack: 10,
    defence: 40,
  };
  expect(magician).toEqual(correct);
});
