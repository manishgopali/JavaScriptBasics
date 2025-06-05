//getter = special method that makes a property readable
//setter = special method that makes a property wirteable


//validate and modify a value when reading/writing a property


class Rectangle{

    constructor(width,height) {
        this.width = width;
        this.height = height;
        
    }

    set width(newWidth){
        if(newWidth > 0){
            this._width =newWidth;
        }
        else{
            console.error("Width must be positive number");
        }

    }

    set height(newHeight){
        if(newHeight > 0){
            this._height =newHeight; //_name = private property
        }
        else{
            console.error("height must be positive number");
        }

    }

    get width(){
        return `${this._width.toFixed(1)}cm`;
    }

    get height(){
        return `${this._height.toFixed(1)}cm`;

    }
    get area(){
        return `${(this._height * this._width).toFixed(1)}cm^2`;
    }

}

const rectangle = new Rectangle(3,4);


// rectangle.width = -1000000;
// rectangle.height = "pizza";



console.log(rectangle.width);
console.log(rectangle.height);
console.log(rectangle.area);










class Person{
    constructor(firstName,lastName,age){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }

    set firstName(newFirstName){
        if(typeof newFirstName === "string" && newFirstName.length > 0){
            this._firstName = newFirstName;
        }
        else{
            console.error("First name must be non-empty string.");
        }
    }

     set lastName(newLastName){
        if(typeof newLastName === "string" && newLastName.length > 0){
            this._lastName = newLastName;
        }
        else{
            console.error("Last name must be non-empty string.");
        }
    }
    set age(newAge){
        if(typeof newAge === "number" && newAge >= 0){
            this._age = newAge;
        }
         else{
            console.error("Age must be non-negative number.");
        }

    }
    get firstName(){
        return this._firstName;

    }
    get lastName(){
        return this._lastName;
    }
    get fullName(){
        return this._firstName + " "+ this._lastName;
    }
    get age(){
        return this._age;
    }
}

const person = new Person("Miyoko","Nepal", 30);

console.log(person.firstName);
console.log(person.lastName);
console.log(person.fullName);
console.log(person.age);