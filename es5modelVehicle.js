function Vehicle(color, numWheels, terrains, name){
    this.color = color;
    this.numWheels = numWheels;
    this.terrains = terrains;
    this.name = name;

    this.getColor = function(){
        return `${this.color}`
    }
    this.getNumWheels = function(){
        return `${this.color}`
    }
    this.getTerrains = function(){
        return `${this.color}`
    }
    this.getName = function(){
        return `${this.color}`
    }
}

const vehicle1 = new Vehicle("red", 4, ["grass"], "totoya")
console.log(vehicle1.getColor())