let promise = function fetchData(){
    //this part is done in backend
    return new Promise((resolve, reject)=>{
        
        //code

        resolve("Success"); //means code executed successfully
        reject("Error");  // there is some error (only one at thing can happen at a time)
    })
}

//if promise is resolved then this will execute
promise.then((res)=>{
    //code
})
//if promise is rejected then this will execute
promise.catch((err)=>{
    //code
})
//or directly

fetchData().then((res)=>{
  //code
}).catch(()=>{
  //code
})