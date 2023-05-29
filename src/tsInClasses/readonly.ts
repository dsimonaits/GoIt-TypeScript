export class House {
  private tenants: string[] = [];

  constructor(public readonly street: string, public readonly type: string) {
    this.street = street;
  }

  public showAddress(this: House): void {
    console.log('Address: ', this.street + ', House type: ', this.type);
  }

  public addTenant(name: string): void {
    this.tenants.push(name);
  }

  public showTenants(): void {
    console.log('Tenants: ', this.tenants);
  }
}

const house = new House('Sanctuary', 'Diamond');

house.showAddress();

house.addTenant('Alex');
house.addTenant('Bob');
house.addTenant('Billy');

house.showTenants();
