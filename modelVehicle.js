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
    
}

const newVehicle = new Vehicle("red", "4", ["grass"], "totoya")
console.log(newVehicle.color("green"))
// newVehicle.changeColor("red")
// console.log(newVehicle.color)
