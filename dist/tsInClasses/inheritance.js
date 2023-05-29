export class House {
    constructor(street, type) {
        this.street = street;
        this.type = type;
        this.tenants = [];
        this.street = street;
    }
    showAddress() {
        console.log('Address: ', this.street);
    }
    showType() {
        console.log('Type: ', this.type);
    }
    addTenant(name) {
        this.tenants.push(name);
    }
    showTenants() {
        console.log('Tenants: ', this.tenants);
    }
}
class DiamondHouse extends House {
    constructor(street, general) {
        super('Diamond', street);
        this.chargeOfTheHouse = general;
    }
    showTenants() {
        console.log('General: ', this.chargeOfTheHouse);
        super.showTenants();
    }
    showAddress() {
        console.log('Address: ', this.street);
    }
}
const diamondHouse = new DiamondHouse('Diamond', 'Max');
diamondHouse.addTenant('Jessica');
diamondHouse.addTenant('Anastasia');
diamondHouse.showTenants();
diamondHouse.showAddress();
//# sourceMappingURL=inheritance.js.map