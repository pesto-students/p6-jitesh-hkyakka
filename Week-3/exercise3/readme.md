## What is the output of following code?

```
function createIncrement() {
	let count=0;
  function increment() {
  	count++;
   }
   let message=`Count is ${count}`;
   function log() {
   	console.log(message);
    }
    return[increment,log];
  }
  const[increment,log] = createIncrement();
  increment();
  increment();
  increment();
  log()
```

### Explaination

Closure is somthing that the inner scope has access to everything from outer scope

 - The createIncrement function returns increment and log function
 - There is a variable count in createIncrement which is initialized to 0 and message variable has String included with count
 - The Increment method is incrementing Count variable and log function is printing message variable.
 - when the createIncrement() method is called
    - The message String is resolved with count 0
    - When the Increment() method is called , the count increments , it increments only count variable, not the message variable.
    - when log() method is called the message variable is called , as the message variable is already initialised with Count = 0 , so the string is alrady created with count 0, the ouput is count is 0.