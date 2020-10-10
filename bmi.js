class BMI {
    constructor(height, weight) {
    this.height = height;
    this.weight = weight;
    }
    calculateBMI() {
        let bmi = this.weight/(this.height*2);
    }

}