class Vehicle {
    constructor(color, type){
        this.color = color
        this.type = type
    }
}

const newVehicle = new Vehicle("red", "toyota")
console.log(newVehicle)
console.log(newVehicle.color)