// constructor = special method for definin the
// porperties and methods of objects

function Car(make,model,year,color){
    this.make = make,
    this.model = model,
    this.year = year,
    this.color = color
    this.drive = function(){console.log(`You drive the ${this.model}`)}
}

const car1 = new Car("Ford", "Mustang",2025,"blue");
const car2 = new Car("Chevrolet","Camaro",2026,"red");

console.log(car1.make);
console.log(car1.model);
console.log(car1.year);
console.log(car1.color);

console.log(car2.make);
console.log(car2.model);
console.log(car2.year);
console.log(car2.color);

car1.drive();
car2.drive();
