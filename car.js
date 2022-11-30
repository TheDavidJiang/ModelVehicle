const Vehicle = require("./es5modelVehicle")
// console.log(typeof(Vehicle.Vehicle))
// const Vehicle = require("./modelVehicle")


class car extends Vehicle{
    brand
    year

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

const newCar = new car()
newCar.setColor("black")
newCar.setName("Model X")
newCar.setNumWheels(4)
newCar.setTerrains(["Grass, Dirt, Rocks"])
newCar.brand = "Tesla"
newCar.year = "2020"
// console.log(newCar)

newCar.display()
