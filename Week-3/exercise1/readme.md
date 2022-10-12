# Memoize 

```
function memorize(add) { // Function that accepts a function
    const cache = new Map() // Creating a map which can be used as Cache object
    return function (...args){ // Returning a function that accepts set of arguments that are used for logic processing
        let key = args.toString()  // Creating Argument as String which can be used as key
        if(cache.has(key))         // Checks if the key available in Cache object or not
            return cache.get(key)   
        cache.set(key,add(...args)) // Sets new cache value    
        return cache.get(key)    
    }
};
```

### Add Function
```
function add(...args){ // To accepts N parameters
    return args.reduce((a,b)=> a + b) // To Sum n parameters
}
```

#### Memoize Function
```
let memAdd = memorize(add); // Creating a variable that hold the memoize function that accepted add function
```


#### Testing code

Following code is used to check the Execution time of the above memoize function.
```
function time(fn){
    console.time()
    fn();
    console.timeEnd()
}

time(()=>memAdd(1,2,3,4,5))
time(()=>memAdd(1,2,3,4,5,6))
time(()=>memAdd(1,2,3,4,5,6,7))
time(()=>memAdd(1,2,3,4,5,7,8))
```