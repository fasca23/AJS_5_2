import Zombie from '../zombie';

test('Check Zombie', () => {
  const zombie = new Zombie('Вова');
  const correct = {
    name: 'Вова',
    type: 'Zombie',
    health: 100,
    level: 1,
    attack: 40,
    defence: 10,
  };
  expect(zombie).toEqual(correct);
});
