export class House {
    constructor(street) {
        this.tenants = [];
        this.street = street;
    }
    showAddress() {
        console.log('Address ', this.street);
    }
    addTenant(name) {
        this.tenants.push(name);
    }
    showTenants() {
        console.log(this.tenants);
    }
}
const house = new House('Sanctuary');
house.addTenant('Alex');
house.addTenant('Bob');
house.addTenant('Billy');
house.showTenants();
//# sourceMappingURL=accessModifiers.js.map