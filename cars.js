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

v1 = new Vehicle("Ford", "Focus", "2009");
v1.information();