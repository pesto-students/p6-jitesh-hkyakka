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
function doTask1(){
    return hotCoffee(); 
}
function doTask2() {
    return coldCoffee();
}
function doTask3() {
   return playGames();
}
async function callTasks(){
    
    const t1 = await doTask1();
    console.log(t1.status," Async Printing Hot Coffee");
    
    const t2 = await doTask2();
    console.log(t2.status," Async Printing Cold Coffee");
    
    const t3 = await doTask3();
    t3.next().then(c=>    console.log(c.value," Async Printing Play Games"));
}

callTasks();



function* callGenTasks(){
    yield doTask1();
    yield doTask2();
    yield doTask3();
}
callGenTasks().next().value.then(e=> console.log(e.status," Generator Printing Hot Coffee"));
callGenTasks().next().value.then(e=> console.log(e.status," Generator Printing Cold Coffee"));
callGenTasks().next().value.then(e=> console.log(e.status," Generator Printing Play Games"));