class Vehicle {
    constructor(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
    }
    information() {
        console.log("Make: " + this.make);
        console.log("Model: " + this.model);
        console.log("Year: " + this.year);
    }
}

class Cars extends Vehicle {
    constructor(make, model, year, doors) {
        super(make, model, year);
        this.doors = doors;
    }
    information() {
        super.information();
        console.log("Doors: " + this.doors);
    }
}

v1 = new Vehicle("Ford", "Focus", "2009");
v1.information();

c1 = new Cars("Honda", "Civic", "2015", "4");
c1.information();