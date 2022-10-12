## Refactoring code
```
function createStack() {
	let items = [];
  return {
    push(item) {
    	items.push(item);
    },
    pop() {
    	return items.pop();
    },
    getItems(){
    	return items; 
    }
  };
}
 
const stack = createStack();
stack.push(10);
stack.push(5);
console.log(stack.pop());
console.log(stack.items);
console.log(stack.getItems());

```

- When the Items variable is not returned the scope is limited to createStack function.
- Using a Getter method we are Able to access the items values
