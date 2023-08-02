const types = [
  'Bowman', 'Swordsman', 'Magician', 'Daemon', 'Undead', 'Zombie',
];

export default class Character {
  constructor(name, type, attack, defence) {
    // Длина имени более 2 и менее 10 должна быть
    if (name.length < 2 || name.length > 10) {
      // Если не так бросаем исключение
      throw new Error('Неправильная длина имени персонажа');
    }
    // Проверяем содержится ли данный тип в массиве типов
    if (!types.includes(type)) {
      throw new Error('Нет такого типа персонажа');
    }
    this.name = name;
    this.type = type;
    this.health = 100;
    this.level = 1;
    this.attack = attack;
    this.defence = defence;
  }

  levelUp() {
    if (this.health > 0) {
      this.level += 1;
      this.attack *= 1.2;
      this.defence *= 1.2;
      this.health = 100;
    } else {
      throw new Error('Нельзя поднять уровень мертвого персонажа');
    }
  }

  damage(points) {
    this.health -= points * (1 - this.defence / 100);
    if (this.health < 0) {
      this.health = 0;
    }
  }
}
