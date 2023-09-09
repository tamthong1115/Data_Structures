var object1 = { value: 10 };
var object2 = object1;
var object3 = { value: 10 };

// object1 === object2 //! True
// object1 === object3 //! False

//! context
// refers to what object it's inside of
const object4 = {
  f: function () {
    console.log(this);
  },
};

//! instantiation
// Make a copy of an object and reuse the code
class Player {
  constructor(name, type) {
    console.log("player", this);
    this.name = name;
    this.type = type;
  }
  introduction() {
    console.log(`Hi I am ${this.name}, I'm a ${this.type}`);
  }
}

class Wizard extends Player {
  constructor(name, type) {
    super(name, type);
    console.log("wizard", this);
  }
  play() {
    console.log(`WEEEE I'm a ${this.type}`);
  }
}

const wizard1 = new Wizard("Shelly", "Healer");
const wizard2 = new Wizard("Anne", "Dark Magic");
