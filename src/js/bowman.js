import Character from './character';

// Создаем класс Лучник по основе базового
export default class Bowman extends Character {
  constructor(name) {
    super(name, 'Bowman', 25, 25);
  }
}
