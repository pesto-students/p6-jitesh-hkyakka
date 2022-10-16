let animal = function(type,ntimes,action,type2){
    console.log(type+" of the "+this.breed+" breed runs at speed of "+this.speed+" kmph which is "+ntimes+" "+action+" than "+type2)
}


let cat = {
    breed:"British Shorthair",
    speed:20
}

let dog = {
    breed:"Pug",
    speed:10
}

//Call
animal.call(cat,"Cats",2,"faster","Dogs")
animal.call(dog,"Dogs",2,"slower","Cats")

//Apply
animal.apply(cat,["Cats",2,"faster","Dogs"])
animal.apply(dog,["Dogs",2,"slower","Cats"])

//Bind

//Call
let catFn = animal.bind(cat,"Cats",2,"faster","Dogs")
let dogFn = animal.bind(dog,"Dogs",2,"slower","Cats")

catFn();
dogFn();



/* Another Example ***/

const Person = {
    name: "User 1",
    age: 24,
    getDetails: function (height, weight) {
        console.log(`The user with name ${this.name} is of age ${this.age} with ${weight} weight and ${height} Height`)
    },
    getArrowDetails: (height, weight) => {
        console.log(`The user with name ${this.name} is of age ${this.age} with ${weight} weight and ${height} Height`)
    }

}

let person1 = {
    name: "Person 1",
    age: "23"
}

let person2 = {
    name: "Person 2",
    age: "22"
}

Person.getDetails();
Person.getDetails.call(person1,5.4,65);
Person.getDetails.call(person2,6,67);

Person.getDetails.apply(person1,[5.4,65]);
Person.getDetails.apply(person2,[6,67]);

let p1Fn = Person.getDetails.bind(person1,4.4,45);
let p2Fn = Person.getDetails.bind(person2,4.6,57);

p1Fn();
p2Fn();
