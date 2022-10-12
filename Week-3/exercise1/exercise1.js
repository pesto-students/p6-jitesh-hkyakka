function memorize(add) {
    const cache = new Map()
    return function (...args){
        let key = args.toString()
        if(cache.has(key))
            return cache.get(key)
        cache.set(key,add(...args))    
        return cache.get(key)    
    }
};
function add(...args){
    return args.reduce((a,b)=> a + b)
}

let memAdd = memorize(add);

function time(fn){
    console.time()
    fn();
    console.timeEnd()
}

time(()=>memAdd(1,2,3,4,5))
time(()=>memAdd(1,2,3,4,5,6))
time(()=>memAdd(1,2,3,4,5,6,7))
time(()=>memAdd(1,2,3,4,5,7,8))