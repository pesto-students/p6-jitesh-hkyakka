

const fiboSeries = function(n){
    let a =0 ,b = 1,fibo = 0;
    const fibo_arr = []
    if(n < 1){
        return;
    } else if( n == 1){
        fibo_arr.push(a)
    }else{
        fibo_arr.push(a)
        for(let i=1;i<n;i++){
            fibo = a + b;
            fibo_arr.push(fibo);
            a = b;
            b = fibo; 
        }
    }
    return fibo_arr;
}


console.log(fiboSeries(1))
console.log(fiboSeries(2))
console.log(fiboSeries(3))
console.log(fiboSeries(4))
console.log(fiboSeries(5))
console.log(fiboSeries(6))
console.log(fiboSeries(7))
console.log(fiboSeries(8))
console.log(fiboSeries(9))
console.log(fiboSeries(10))