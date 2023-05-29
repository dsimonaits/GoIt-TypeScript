class Pilot {
    constructor(name, age) {
        this.name = name;
        this.age = age;
        this.checkAge();
    }
    checkAge() {
        if (this.age < 20) {
            Pilot.isPilotAdult = false;
            console.log('Pilot to young');
        }
        else {
            Pilot.isPilotAdult = true;
        }
    }
    greet(phrase) {
        if (Pilot.isPilotAdult)
            console.log(phrase + ' My name is ' + this.name);
    }
    flyMessage() {
        if (Pilot.isPilotAdult)
            console.log('Have a nice flight!');
    }
}
class Plane {
    pilotAvailable(pilot) {
        this.pilot = pilot;
    }
}
export class Boeing extends Plane {
    startEngine() {
        var _a;
        if (!this.pilot) {
            console.log('Waiting for pilot');
        }
        console.log('Turbine started');
        (_a = this.pilot) === null || _a === void 0 ? void 0 : _a.flyMessage();
        return true;
    }
}
const pilot = new Pilot('Denis', 24);
const boeing = new Boeing();
pilot.greet('Welcome aboard!');
boeing.pilotAvailable(pilot);
boeing.startEngine();
//# sourceMappingURL=classesInterface.js.map