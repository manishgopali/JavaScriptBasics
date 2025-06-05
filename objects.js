

//object  = a collection of related properties and or methods
// can represent real world objects(people,products,places)
// object ={key: value ,function()}


const person1 ={
    firstName : "Manish",
    lastName : "Gopali",
    age: 23,
    isEmployed: false,
    sayHello: function(){console.log("Hi! I am Manish!")},
    eat : ()=>console.log("I am eating chicken over rice."),
}

const person2 ={
    firstName: "Miyoko",
    lastName : "Thapa",
    age : 29,
    isEmployed : true,
    sayHello: function(){console.log("Hi! I am Miyoko...!")},
    eat: ()=>console.log("I am eating ramen."),
}

console.log(person1.firstName);
console.log(person1.lastName);
console.log(person1.age);
console.log(person1.isEmployed);

console.log(person2.firstName);
console.log(person2.lastName);
console.log(person2.age);
console.log(person2.isEmployed);

person1.sayHello();
person2.sayHello()
person1.eat();
person2.eat();