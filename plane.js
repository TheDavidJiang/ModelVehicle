const Vehicle = require("./es5modelVehicle")

class Plane extends Vehicle{
    manufacturer
    constructor(numWheels){
        super(numWheels)
        this.numWheels = 2
        this.terrains = ["Air", "Asphalt"]
        this.display = function() {

            console.log(
    `Color: ${this.color}, 
Number of Wheels: ${this.numWheels}, 
Terrains: ${this.terrains}, 
Name: ${this.name},
Manufacturer: ${this.manufacturer}
                `)
        }
    }

    get manufacturer(){
        return this.manufacturer
    }

    set manufacturer(newManufacturer){
        this.manufacturer = newManufacturer
    }
}

const newPlane = new Plane()
// using function
newPlane.setColor("white")
newPlane.setName("Boeing707")
//using es6
newPlane.manufacturer = "Boeing"

newPlane.display()