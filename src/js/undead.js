import Character from './character';

// Создаем класс Нежить по основе базового
export default class Undead extends Character {
  constructor(name, type = 'Undead') {
    super(name, type);
    this.attack = 25;
    this.defence = 25;
  }
}
