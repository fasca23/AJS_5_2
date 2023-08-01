import Character from './character';

// Создаем класс Нежить по основе базового
export default class Undead extends Character {
  constructor(name) {
    super(name, 'Undead', 25, 25);
  }
}
