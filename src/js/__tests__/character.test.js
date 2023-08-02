import Character from '../character';

test('Проверка имени персонажа, если короткое', () => {
  expect(
    () => new Character('П', 'Bowman', 100, 100),
  ).toThrow('Неправильная длина имени персонажа');
});

test('Проверка имени персонажа, если длинное', () => {
  expect(
    () => new Character('Петяяяяяяяяяяяяяяяяяяяяя', 'Swordsman', 100, 100),
  ).toThrow('Неправильная длина имени персонажа');
});

test('Проверка правильности ввода типа персонажа', () => {
  expect(
    () => new Character('Петя', 'Леший', 100, 100),
  ).toThrow('Нет такого типа персонажа');
});

// Проверка дамага
test('Получение урона персонажем', () => {
  // Создаем тестового перса
  const testPers = new Character('Вова', 'Magician', 10, 40);
  testPers.damage(50);
  expect(testPers).toEqual({
    name: 'Вова',
    type: 'Magician',
    health: 70,
    level: 1,
    attack: 10,
    defence: 40,
  });
});

test('Отсутствие урона у мертвого персонажа', () => {
  const testPers = new Character('Петя', 'Magician', 10, 40);
  testPers.health = 10;
  testPers.damage(100);
  expect(testPers.health).toEqual(0);
});

// Проверка поднятия уровня
test('Переход на следующий уровень', () => {
  const testPers = new Character('Вова', 'Magician', 10, 40);
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
  const testPers = new Character('Вова', 'Magician', 10, 40);
  testPers.health = 0;
  expect(() => testPers.levelUp()).toThrow(
    'Нельзя поднять уровень мертвого персонажа',
  );
});
