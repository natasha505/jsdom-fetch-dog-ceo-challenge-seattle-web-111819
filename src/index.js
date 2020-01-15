console.log('%c HI', 'color: firebrick')

document.addEventListener("DOMContentLoaded", () => {
        console.log("page loaded");
        // showData();
        fetchImages(); //pictures
        fetchBreeds(); //breeds
});


function fetchImages() {
    fetch("https://dog.ceo/api/breeds/image/random/4")
    .then(res => res.json() )
    .then(json => json.message.forEach(image => addDog(image)))
}


function addDog(json){
    const imageContainer = document.getElementById("dog-image-container");
    const newImageTag = document.createElement("img");
    newImageTag.src = json;
    imageContainer.appendChild(newImageTag);
    return imageContainer;
}


function fetchBreeds(){
    fetch('https://dog.ceo/api/breeds/list/all')
    .then(res => res.json())
    .then(json => addBreed(Object.keys(json.message))) //take what ever is in json.message & get that obj's keys. 
}

function addBreed(breeds){
    // console.log(breeds) ////what is breeds? array of strings
    //identify which part of the dom in which you want to place the breeds & iterate through & a
    let ul = document.getElementById("dog-breeds")
    breeds.forEach(breed => {  
        let li = document.createElement("li")
        li.innerText = breed
        ul.appendChild(li)
    })
}

