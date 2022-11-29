function Vehicle(color, numWheels, terrains, name){
    this.color = color;
    this.numWheels = numWheels;
    this.terrains = terrains;
    this.name = name;

    this.getColor = function(){
        return `${this.color}`
    }
    this.getNumWheels = function(){
        return `${this.numWheels}`
    }
    this.getTerrains = function(){
        return [this.terrains]
    }
    this.getName = function(){
        return `${this.name}`
    }

    this.setColor = function(newColor){
        this.color = newColor
    }
    this.setNumWheels = function(newWheels){
        this.numWheels = newWheels
    }
    this.setTerrains = function(newTerrains){
        this.terrains = newTerrains
    }
    this.setName = function(newName){
        this.name = newName
    }
}

const vehicle1 = new Vehicle("red", 4, ["grass"], "totoya")
vehicle1.setColor("green")
console.log(vehicle1)