//JSON = (javascript object notation) data-interchange format
// used for exchanging data between a server and web application
// JSON files {key:value} OR [value1,value2,value3]

//JSON.stringify() = converts js object to a json string.
//JSON.parse() = converts a JSON string to js object



  
/* 
  for converting into JSON string
    const names = ["Miyoko", "Maya", "Minato", "Manish"];
    const person = {
        "name":"Miyoko",
        "age":28,
        "isEmployed":true,
        "hobbies":["WatchingAnime","Cooking","PlayinVideoGames"]
    };
    const people = [{
            "name":"Miyoko",
            "age":28,
            "isEmployed":true
        },
        {
            "name":"Manish",
            "age":23,
            "isEmployed":false
        },
        {
            "name":"Maya",
            "age":26,
            "isEmployed":true,
        },
        {
            "name":"Minato",
            "age":30,
            "isEmployed":false,
    }];

    /*
        const jsonString = JSON.stringify(names);

        console.log(names);
        console.log(jsonString);
    */

    /*
        const jsonString = JSON.stringify(person);

        console.log(person);
        console.log(jsonString);
    */


    /*
        const jsonString = JSON.stringify(people);

            //console.log(people);
            console.log(jsonString);
    */


// for JSON.parse()

 const jsonNames = `["Miyoko", "Maya", "Minato", "Manish"]`;
 const jsonPerson = `{"name":"Miyoko","age":28,"isEmployed":true,"hobbies":["WatchingAnime","Cooking","PlayinVideoGames"]}`;

 const jsonPeople = `[{"name":"Miyoko","age":28,"isEmployed":true},
        {"name":"Manish","age":23,"isEmployed":false},
        {"name":"Maya","age":26,"isEmployed":true},
        {"name":"Minato","age":30,"isEmployed":false}]`;



// const parsedData = JSON.parse(jsonNames);
//console.log(jsonNames);
// console.log(parsedData);

// const parsedData = JSON.parse(jsonPerson);
// console.log(jsonPerson);
// console.log(parsedData);

const parsedData = JSON.parse(jsonPeople);
console.log(jsonPeople);
console.log(parsedData);


//fetching


fetch("person.json")
   .then(response => response.json())
   .then(value => console.log(value));


fetch("people.json")
.then(response => response.json())
.then(values =>  values.forEach(value => console.log(value)))
.catch(eror => console.error(error()));


//for specific values we can use

fetch("people.json")
.then(response => response.json())
.then(values =>  values.forEach(value => console.log(value.isEmployed)));

