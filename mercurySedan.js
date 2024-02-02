//this includes the vehicle class as a module
const VehicleModule = require("./vehicleBaseClass")

class Car extends Vehicle{

    constructor(make, model, year, color, mileage,maxPassengers, passenger, numberOfWheels, maxSpeed, fuel, scheduleService){
        this.maxPassengers = maxPassengers
        this.passenger = passenger
        this.numberOfWheels = numberOfWheels
        this.maxSpeed = maxSpeed
        this.fuel = fuel
        this.scheduleService = scheduleService

        super(make, model, year, color, mileage);
    }

    loadPassenger(num){
        if(num > this.maxPassengers){
            console.log("There are not enough seats to for the passengers")
        }
        else{
            console.log("Everyone has a seat in the car")
        }
    }

    start(){
        if(this.fuel > 0){
            console.log("The car has fuel")
        }
        else{
            console.log("The car had no fuel")
        }
    }

    scheduleService(){
        if(this.mileage > 30000){
            this.scheduleService = true
            console.log("Service is needed for the Vehicle")
        }
        else{
            console.log("No Service is needed")
        }
    }

}    


//this shows how to call from this module...
let v = new VehicleModule.Vehicle("Mercury", "Sedan", "1965", "red", "31000");
console.log(v)



//After you write the derived Car class, you should test it out.

//Note: You can code your derived Car class here or make a file named index.js and do it there.


//TO DO: Code the Car subclass here or in index.js file, i.e. class Car extends Vehicle ...












//TO DO: Creating Instances and Testing Them

//You can use the same instance "v" of the Vehicle class above for the base class.





//Create at least two new instances of the Car class and test them here:
