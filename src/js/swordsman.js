import Character from './character';

// Создаем класс Мечник по основе базового
export default class Swordsman extends Character {
  constructor(name) {
    super(name, 'Swordsman', 40, 10);
  }
}
