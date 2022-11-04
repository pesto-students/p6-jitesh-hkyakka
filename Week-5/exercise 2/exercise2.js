function vowelCount(str){
    let map = new Map();
    str.split("").map(s=>{ s=s.toLowerCase();map.has(s) ? map.set(s,(map.get(s) + 1)) : map.set(s,1)})
    return map;
}

console.log(vowelCount("Hello World"))