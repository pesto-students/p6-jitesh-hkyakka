# Call, Apply and Bind

## Function Borrowing
Function borrowing allows us to use the methods of one object on a different object without having to make a copy of that method and maintain it in two separate places. It is accomplished through the use of .call(), .apply(), or .bind(), all of which exist to explicitly set this on the method we are borrowing.

### Call

- In Call , the First argument is referenced to this object.
- Rest of the arguments are used as function parameters.

### Apply

- Similar to Call which differs by the ways arguments are passed. The arguments are passed as list.

### Bind

- Its a copy of object which returns the method.
- Function returned can be used for invoking later.