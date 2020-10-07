class BMI {
    //created class with a constructor that takes  two arguments 
    constructor(height, weight) {
        this.height = height;
        this.weight = weight;
    }

    calculateBMI() {
        //created a method witha formula that calculates bm1
        let bmi = this.weight / (this.height ** 2);
        return bmi;

    }

}
//created instance 
//shows reults
let MyBmi = new BMI(2, 90);
let calculateBMI = MyBmi.calculateBMI();
console.log(calculateBMI);