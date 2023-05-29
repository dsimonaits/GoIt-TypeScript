"use strict";
class House {
    constructor(n) {
        this.street = n;
    }
    showAddress() {
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
//# sourceMappingURL=simpleConstructor.js.map