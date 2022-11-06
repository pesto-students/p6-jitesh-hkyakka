const vowels = ['a','e','i','o','u']
const vowelCount = (str) =>{
    let map = new Map();
    [...str.toLowerCase()].forEach( s => {
        vowels.includes(s) ? map.has(s) ? map.set(s,(map.get(s) + 1)) : map.set(s,1):map
    });
    return map;
}

console.log(vowelCount("Hello World"))
console.log(vowelCount("This is to check Vowles and Count."))