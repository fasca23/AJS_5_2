const types = [
  'Bowman', 'Swordsman', 'Magician', 'Daemon', 'Undead', 'Zombie',
];

export default class Character {
  constructor(name, type) {
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
    this.attack = undefined;
    this.defence = undefined;
  }

  levelUp() {
    if (this.health <= 0) {
      throw new Error('Нельзя поднять уровень мертвого персонажа');
    } else {
      this.level += 1;
      this.attack *= 1.2;
      this.defence *= 1.2;
      this.health = 100;
    }
  }

  damage(points) {
    if (this.health <= 0) {
      throw new Error('Нельзя нанести урон мертвому персонажу');
    } else {
      this.health -= points * (1 - this.defence / 100);
    }
    if (this.health < 0) {
      this.health = 0;
    }
  }
}
