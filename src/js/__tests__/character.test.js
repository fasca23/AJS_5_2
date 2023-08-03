import Character from '../character';
import Magician from '../magician';

test('Проверка имени персонажа, если короткое', () => {
  expect(
    () => new Character('П', 'Bowman'),
  ).toThrow('Неправильная длина имени персонажа');
});

test('Проверка имени персонажа, если длинное', () => {
  expect(
    () => new Character('Петяяяяяяяяяяяяяяяяяяяяя', 'Swordsman'),
  ).toThrow('Неправильная длина имени персонажа');
});

test('Проверка правильности ввода типа персонажа', () => {
  expect(
    () => new Character('Петя', 'Леший'),
  ).toThrow('Нет такого типа персонажа');
});

test('Получение урона персонажем', () => {
  const testPers = new Magician('Вова');
  testPers.damage(150);
  expect(testPers).toEqual({
    name: 'Вова',
    type: 'Magician',
    health: 10,
    level: 1,
    attack: 10,
    defence: 40,
  });
});

test('Если урон загоняет здоровье в минус', () => {
  const testPers = new Magician('Вова');
  testPers.damage(200);
  expect(testPers).toEqual({
    name: 'Вова',
    type: 'Magician',
    health: 0,
    level: 1,
    attack: 10,
    defence: 40,
  });
});

test('Если прилетает урон по мертвому персу', () => {
  const testPers = new Magician('Петя');
  testPers.health = 0;
  expect(() => testPers.damage(100)).toThrow(
    'Нельзя нанести урон мертвому персонажу',
  );
});

test('Переход на следующий уровень', () => {
  const testPers = new Magician('Вова');
  testPers.health = 10;
  testPers.levelUp();
  expect(testPers).toEqual({
    name: 'Вова',
    type: 'Magician',
    health: 100,
    level: 2,
    attack: 12,
    defence: 48,
  });
});

test('Поднятие уровня у мертвого перса', () => {
  const testPers = new Magician('Вова');
  testPers.health = 0;
  expect(() => testPers.levelUp()).toThrow(
    'Нельзя поднять уровень мертвого персонажа',
  );
});
