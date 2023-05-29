abstract class Plane {
  protected isPilotAvailable = false;

  public pilotAvailable() {
    this.isPilotAvailable = true;
  }

  public abstract startEngine(): string;
}

class Maize extends Plane {
  public startEngine(): string {
    return 'Ta ta ta ta';
  }
}

class Boeing extends Plane {
  public startEngine(): string {
    return 'Wu wu wu wu';
  }
}

const maize = new Maize();
const boeing = new Boeing();

maize.pilotAvailable();
boeing.pilotAvailable();

console.log('Sound of maize :', maize.startEngine());
console.log('Sound of boeing :', boeing.startEngine());
