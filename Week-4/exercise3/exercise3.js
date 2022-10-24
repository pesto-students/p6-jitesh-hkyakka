const fibo = (n) => ({

    [Symbol.iterator]: () => {
        let a = 0 ,b = 1,fibo = 0,i=1;
        return {
            next(){
                if(n < 1){
                    return {value: a,done: true}
                } else if(n==1){
                    if(i == 1){
                        i++;
                        return {value: a,done: false}
                    }
                    else
                        return {value: b, done: true}    
                }else{
                    if(i == 1){
                        i++;
                        return {value: a,done: false}
                    }                     
                    else if(i == 2){
                        i++;
                        return {value: b, done: false}  
                    } else{
                        fibo = a + b;
                        a = b;
                        b = fibo;
                        i++;
                        return {value: fibo, done: (i-1) > n}
                    } 
                }
                
            }
        }
    }

});

console.log(...fibo(0))
console.log(...fibo(1))
console.log(...fibo(2))
console.log(...fibo(3))
console.log(...fibo(4))
console.log(...fibo(5))
console.log(...fibo(6))
console.log(...fibo(7))
console.log(...fibo(8))
console.log(...fibo(9))
console.log(...fibo(10))
console.log("---------------------")
for(let num of fibo(3)){
    console.log(num)
}
// const fiboSeries = function(n){
//     let a =0 ,b = 1,fibo = 0;
//     const fibo_arr = []
//     if(n < 1){
//         return;
//     } else if( n == 1){
//         fibo_arr.push(a)
//     }else{
//         fibo_arr.push(a)
//         for(let i=1;i<n;i++){
//             fibo = a + b;
//             fibo_arr.push(fibo);
//             a = b;
//             b = fibo; 
//         }
//     }
//     return fibo_arr;
// }


// console.log(fiboSeries(1))
// console.log(fiboSeries(2))
// console.log(fiboSeries(3))
// console.log(fiboSeries(4))
// console.log(fiboSeries(5))
// console.log(fiboSeries(6))
// console.log(fiboSeries(7))
// console.log(fiboSeries(8))
// console.log(fiboSeries(9))
// console.log(fiboSeries(10))