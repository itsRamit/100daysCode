let array = [21, 65, 56, 3445, 6534, 905]

// Classical for loop
for(let i=0; i<array.length; i++){
    //Code
}

// forEach loop
array.forEach((ele)=>{
    console.log(ele)
    //Code
})

// for...of loop (ele is elements)
for(let ele of array){
  //code
}

// for...in loop (idx is index)
for(let idx in array){
    //code
}


// Calls a defined callback function on each element of an array, and returns an array that contains the results.
let newArray1 = array.map((ele)=>{
    return ele + 1;
})

//Returns the elements of an array that meet the condition specified in a callback function.
let newArray2 = array.filter((ele)=>{
    return ele > 100; // will only return element that are > 100
})

// Calls the specified callback function for all the elements in an array. The return value of the callback function is the accumulated result, 
// and is provided as an argument in the next call to the callback function.
let newArray3 = array.reduce((ele1, ele2)=>{
    return ele1 + ele2;
})




console.log(newArray)