import Character from './character';

// Создаем класс Демон по основе базового
export default class Daemon extends Character {
  constructor(name) {
    super(name, 'Daemon', 10, 40);
  }
}
