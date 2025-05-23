class User {
  private _age: number = 0;

  get age(): number {
    return this._age;
  }

  set age(value: number) {
    if (value > 0 && value < 150) {
      this._age = value;
    } else {
      console.error('Invalid age value');
    }
  }
}

const user = new User();
user.age = 25;
console.log(user.age);
user.age = -5;
