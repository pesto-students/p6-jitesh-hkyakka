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