const Vehicle = require("./es5modelVehicle")
// console.log(typeof(Vehicle.Vehicle))
// const Vehicle = require("./modelVehicle")


class Car extends Vehicle{
    brand
    year
    constructor(numWheels){
        super(numWheels)
        this.numWheels = 4
        this.display = function() {
            // for (let terrain of this.terrains){
            //     console.log(terrain)
            // }
            console.log(
    `Color: ${this.color}, 
Number of Wheels: ${this.numWheels}, 
Terrains: ${this.terrains}, 
Name: ${this.name},
Brand: ${this.brand},
Year: ${this.year}
                `)
    
    
        };
    }

    get brand(){
        return this.brand
    }
    get year(){
        return this.year
    }

    set brand(newBrand){
        this.brand = newBrand
    }
    set year(newYear){
        this.brand = newYear
    }


}

const newCar = new Car()
// using function
newCar.setColor("black")
newCar.setName("Model X")
newCar.setTerrains(["Grass, Dirt, Rocks"])
//using es6
newCar.brand = "Tesla"
newCar.year = "2020"
// console.log(newCar)

newCar.display()
