export class House {
  //   public street: string;
  //   public tenants: string[] = [];

  private street: string;
  private tenants: string[] = [];

  constructor(street: string) {
    this.street = street;
  }

  public showAddress(this: House): void {
    console.log('Address ', this.street);
  }

  public addTenant(name: string): void {
    this.tenants.push(name);
  }

  public showTenants(): void {
    console.log(this.tenants);
  }
}

const house = new House('Sanctuary');

house.addTenant('Alex');
house.addTenant('Bob');
house.addTenant('Billy');

house.showTenants();
