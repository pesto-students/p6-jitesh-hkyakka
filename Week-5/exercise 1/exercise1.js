import fetch from 'node-fetch';
const baseURLHot = 'https://api.sampleapis.com/coffee/hot';
const baseURLCold = 'https://api.sampleapis.com/coffee/cold';
const baseURLGames = 'https://api.sampleapis.com/switch/games';
function hotCoffee() {
    return fetch(baseURLHot);
}
function coldCoffee() {
    return fetch(baseURLCold);
}
async function* playGames() {
    const t = await fetch(baseURLGames);
    yield t.status;
}
async function doTask1(){
    const x = await hotCoffee();
    console.log(x.status," Printing Hot Coffee"); 
}
async function doTask2() {
    const x = await coldCoffee();
    console.log(x.status," Printing Cold Coffee"); 
}

async function doTask3() {
    const x = playGames();
    console.log(x.next().then((c) => {console.log("Status : ",c.value)})," Printing Play Games"); 
}
const t1 = doTask1();
console.log(t1," Nothing will print as Promise need to be resolved");

const t2 = doTask2();
console.log(t2," Nothing will print as Promise need to be resolved");

const t3 = doTask3();
console.log(t3," Nothing will print as Promise need to be resolved");

