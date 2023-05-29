"use strict";
class Plane {
    constructor() {
        this.isPilotAvailable = false;
    }
    pilotAvailable() {
        this.isPilotAvailable = true;
    }
}
class Maize extends Plane {
    startEngine() {
        return 'Ta ta ta ta';
    }
}
class Boeing extends Plane {
    startEngine() {
        return 'Wu wu wu wu';
    }
}
const maize = new Maize();
const boeing = new Boeing();
maize.pilotAvailable();
boeing.pilotAvailable();
console.log('Sound of maize :', maize.startEngine());
console.log('Sound of boeing :', boeing.startEngine());
//# sourceMappingURL=abstractClasses.js.map