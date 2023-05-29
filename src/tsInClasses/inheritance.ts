export class House {
  private tenants: string[] = [];

  constructor(
    protected readonly street: string,
    private readonly type: string
  ) {
    this.street = street;
  }

  public showAddress(this: House): void {
    console.log('Address: ', this.street);
  }

  public showType(this: House): void {
    console.log('Type: ', this.type);
  }

  public addTenant(name: string): void {
    this.tenants.push(name);
  }

  public showTenants(): void {
    console.log('Tenants: ', this.tenants);
  }
}

class DiamondHouse extends House {
  private chargeOfTheHouse: string;
  constructor(street: string, general: string) {
    super('Diamond', street);

    this.chargeOfTheHouse = general;
  }

  public showTenants(): void {
    console.log('General: ', this.chargeOfTheHouse);

    super.showTenants();
  }

  public showAddress(): void {
    console.log('Address: ', this.street);
  }
}

const diamondHouse = new DiamondHouse('Diamond', 'Max');

diamondHouse.addTenant('Jessica');
diamondHouse.addTenant('Anastasia');

diamondHouse.showTenants();
diamondHouse.showAddress();
