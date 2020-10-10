class BMI {
    constructor(height, weight) {
    this.height = height;
    this.weight = weight;
    }
    calculateBMI() {
        let bmi = this.weight/(this.height*2);
        console.log(bmi);
    }
}

b1 = new BMI(1.83, 70);
b1.calculateBMI();