class student {
  constructor(name) {
    this.name = name;
  }
}

let Ramit = new student("Hey")
console.log(Ramit.name)


//extends
class Car {
  constructor(brand) {
    this.carname = brand;
  }
  present() {
    return 'I have a ' + this.carname;
  }
}

class Model extends Car { // car is a parent class of Model
  constructor(brand, mod) {
    super(brand); //super means its parent constructor
    this.model = mod;
  }
  show() {
    return this.present() + ', it is a ' + this.model;
  }
}

