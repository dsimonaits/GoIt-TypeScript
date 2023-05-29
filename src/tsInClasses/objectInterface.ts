interface IPerson {
  readonly name: string;
  readonly age: number;

  greet(phrase: string): void;
}

type typePerson = {
  readonly name: string;
  readonly age: number;

  greet(phrase: string): void;
};

let user: IPerson;

user = {
  name: 'John',
  age: 36,
  greet(phrase: string): void {
    console.log(phrase + ' My name is ' + this.name);
  },
};

user.greet('Hi all!');
