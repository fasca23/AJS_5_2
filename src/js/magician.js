import Character from './character';

// Создаем класс Маг по основе базового
export default class Magician extends Character {
  constructor(name) {
    super(name, 'Magician', 10, 40);
  }
}
