import Character from './character';

// Создаем класс Зомби по основе базового
export default class Zombie extends Character {
  constructor(name) {
    super(name, 'Zombie', 40, 10);
  }
}
