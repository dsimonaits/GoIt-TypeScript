export class House {
  street: string;

  constructor(n: string) {
    this.street = n;
  }

  showAddress(this: House): void {
    console.log('Address ' + this.street);
  }
}

const newHouse = new House('Middle-earth');

newHouse.showAddress();

const copyNewHouse = {
  street: 'Sanctuary',
  showAddress: newHouse.showAddress,
};

copyNewHouse.showAddress();
