interface IPerson {
  readonly name: string;
  readonly age: number;

  greet(phrase: string): void;
}

interface IPilot {
  flyMessage(): void;
}

class Pilot implements IPerson, IPilot {
  static isPilotAdult: boolean;
  constructor(public readonly name: string, public age: number) {
    this.checkAge();
  }

  private checkAge() {
    if (this.age < 20) {
      Pilot.isPilotAdult = false;
      console.log('Pilot to young');
    } else {
      Pilot.isPilotAdult = true;
    }
  }

  public greet(phrase: string): void {
    if (Pilot.isPilotAdult) console.log(phrase + ' My name is ' + this.name);
  }

  public flyMessage(): void {
    if (Pilot.isPilotAdult) console.log('Have a nice flight!');
  }
}

abstract class Plane {
  protected pilot?: IPilot;

  public pilotAvailable(pilot: IPilot) {
    this.pilot = pilot;
  }

  public abstract startEngine(): boolean;
}

export class Boeing extends Plane {
  public startEngine() {
    if (!this.pilot) {
      console.log('Waiting for pilot');
    }

    console.log('Turbine started');

    this.pilot?.flyMessage();
    return true;
  }
}

const pilot = new Pilot('Denis', 24);
const boeing = new Boeing();

pilot.greet('Welcome aboard!');
boeing.pilotAvailable(pilot);

boeing.startEngine();
