function Vehicle(newWheels, price) {
    this.newWheels=newWheels;
     this.price=price;
    
}

Vehicle.prototype.getPrice  = function(){
    return this.price
};

var vehicle1 = new Vehicle(2,50000);
var vehicle2= new Vehicle(4,50000);