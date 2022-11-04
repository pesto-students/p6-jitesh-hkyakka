function hasDuplicates(arr){
    return new Set(arr).size == arr.length ? false : true; 
}

console.log("Has Duplicates : ",hasDuplicates([1,2,3,4,5]))
console.log("Has Duplicates : ",hasDuplicates([1,2,2,3,1,1]))