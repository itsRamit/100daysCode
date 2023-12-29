fun();
async function fun(){
  await setTimeout(()=>{
    console.log("Hey");
   },4000)
}
// await pause the execution of surrounding async function untile the promise settles (resolve or reject)
console.log("Check");