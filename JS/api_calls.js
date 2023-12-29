const url = 'https://cat-fact.herokuapp.com/facts';

async function getData(){
    const response = await fetch(url) //returns a promise (i.e response is a promise)
    console.log(response); // JSON formate
    const data = await response.json() // converts into javascript object
    console.log(data);
    document.querySelector(".api").innerHTML = data[0].text;
}

getData()