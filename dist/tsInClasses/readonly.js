export class House {
    constructor(street, type) {
        this.street = street;
        this.type = type;
        this.tenants = [];
        this.street = street;
    }
    showAddress() {
        console.log('Address: ', this.street + ', House type: ', this.type);
    }
    addTenant(name) {
        this.tenants.push(name);
    }
    showTenants() {
        console.log('Tenants: ', this.tenants);
    }
}
const house = new House('Sanctuary', 'Diamond');
house.showAddress();
house.addTenant('Alex');
house.addTenant('Bob');
house.addTenant('Billy');
house.showTenants();
//# sourceMappingURL=readonly.js.map