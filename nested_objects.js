//nested objects = objects inside of other objects.
// allows you to represent more ocmplex data strucutres
//child object is enclosed by a parent object

// Person{Adresss{},ContactInfo{}}
// ShoppingCart{Keyword{},Mouse{}}

/*
const person = {
    fullName : "Miyoko Nepal",
    age : 30 ,
    isStudent : false,
    hobbies : ["gaming","cooking","swimming"],
    address : {
        street : "124 land St.",
        city : "Kathmandu",
        country : "Nepal",
    }

}

// for(const property in person.address){
//     console.log(person.address[property]);
// }


console.log(person.fullName);
console.log(person.age);
console.log(person.isStudent);
console.log(person.hobbies[2]);
console.log(person.address.street);
*/
class Person{
    constructor(name,age,...address){
        this.name = name;
        this.age = age;
        this.address = new Address(...address);
    }
}

class Address{
    constructor(street,city,country) {

        this.street = street;
        this.city = city;
        this.country = country;
        
    }
}

const person1 = new Person("Miyoko",30,
                            "Kalanki","Kathmandu","Nepal");

const person2 = new Person("Manish",23,
                            "Kalanki","Kathmandu","Nepal");

const person3 = new Person("Kalwoti",25,
                            "Kalimati","Kathmandu","Nepal");

console.log(person3.address.country);

// we can access all properties