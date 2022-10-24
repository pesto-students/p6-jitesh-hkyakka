const STATE = {
    pending: 'PENDING',
    resolved: 'RESOLVED',
    rejected: 'REJECTED'

}


const MyPromise = function(executer){
   
    let state = STATE.pending;
    let value = null;
    let time = null;
    let thenCallBacks = [];
    let catchCallbacks = [];

    function resolve(result){console.log((new Date())+" Called Time")
        if(state !== STATE.pending) return

        state = STATE.resolved
        value = result
        time = new Date()
        thenCallBacks.forEach( (clb) => clb(value,time))
    }
    function reject(result){
        if(state !== STATE.pending) return

        state = STATE.rejected
        value = result
        time = new Date()
        catchCallbacks.forEach( (clb) => clb(value,time))
    }

    this.then = function(callback){console.log((new Date())+" Then Called Time")
        if(state == STATE.resolved){
            callback(value,time)
        }else{
            thenCallBacks.push(callback)
        }
    }

    this.catch = function(callback){
        if(state == STATE.rejected){
            callback(value,time)
        }else{
            catchCallbacks.push(callback)
        }
    }

    executer(resolve,reject);
}

const generateRandom = (res,rej) => {
    const random  = Math.floor(Math.random() * 100) + 1;
    if(random % 5 == 0){
        setTimeout(()=> {rej(random+" Value is Rejected","")},1000);
    }else{
        setTimeout(()=> {res(random+" Value is Accepted","")},1000);
    }
}

//console.log(generateRandom())
for(var i =0 ;i<1;i++){
    let generateRandomN = new MyPromise(generateRandom)

    generateRandomN.then((value,time)=>{
        console.log(value,time)
    })
    generateRandomN.catch((value,time)=>{
        console.log(value,time)
    })
}


console.log(" Checking async");