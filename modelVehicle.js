class Vehicle {
    color = "red"
    numWheels
    terrains
    name

    

    get color(){
        return this.color
    }
    get numWheels(){
        return this.numWheels
    }
    get terrains(){
        return this.terrains
    }
    get name(){
        return this.name
    }

    set color(newColor){
        this.color = newColor
    }
    set numWheels(newWheels){
        this.numWheels = newColor
    }
    set terrains(newColor){
        this.color = newColor
    }
    set name(newColor){
        this.color = newColor
    }

    
}

const newVehicle = new Vehicle("red", "4", ["grass"], "totoya")
newVehicle.color = "green"
// newVehicle.changeColor("red")
console.log(newVehicle.color)

exports.Vehicle = Vehicle
