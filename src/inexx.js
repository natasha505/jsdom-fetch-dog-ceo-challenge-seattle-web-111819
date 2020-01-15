const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
const breedUrl = 'https://dog.ceo/api/breeds/list/all'


////FETCHES
//fetch collection of dog images & return a json() Promise for use elsewhere.
function fetchImages() {
    return fetch(imgUrl).then(res => res.json());
}

function fetchBreeds() {
    return fetch(breedUrl).then(res => res.json());
}









function addImage(imageUrl) {
    let image = document.createElement("img");
    image.src = imgUrl;
    image.style.width = "25%"
    document.getElementById("dog-image-container").appendChild(image);
}

// requires a collection of image URLs
function addImageCollection(imageUrlArray) {
    imageUrlArray.forEach(function (dogPictureUrl){
        addImage(ogPictureUrl);
    })
}

//breeds list
// fx name          param name
 renderBreeds = listOfBreeds => {
//  listOfBreeds.forEach(breed => {
    Object.keys(listOfBreeds).forEach(breed => {
        //  publishBreed(breed)        // need to provide a listof breeds && 
         publishBreed(breed, listOfBreeds[breed]);
     })
 }


 printBreed = BreedName => {
    let breedItem = document.createElement("li");
    breedItem.textContent = breed;
    document.getElementById("dog-breeds").appendChild(breedItem)
    breedItem.addEventListener("click", function(e) {
        e.target.style.color = "red" 
    }

//  publishBreed = breed =>{
publishBreed = key, subBreeds =>{

    printBreed(breed)
    // check to see if subBreeds is empty
    // if (subBreeds.length === 0 { 
    // let breedItem = document.createElement("li");
    // breedItem.textContent = breed;
    // document.getElementById("dog-breeds").appendChild(breedItem)
    // breedItem.addEventListener("click", function(e) {
    //     e.target.style.color = "red" 
    })
    } else {
        subBreeds.forEach(subBreed => {
            let breedItem = document.createElement("li");
            breedItem.textContent = `${subBreed} ${breed}`;
            document.getElementById("dog-breeds").appendChild(breedItem)    
        });
    })
    breedItem.addEventListener("click", function(e) {
        e.target.style.color = "green" 
    })
 }









// PAGE LOAD
document.addEventListener("DOMContentLoaded", () => {
    console.log("page loaded");
    // showData();
    //pictures
    fetchImages().then(json) => {
        addImage(json.message);
    }; 
    fetchBreeds().then(renderBreeds(json.message)) //fetchBreeds().then(console.log) - console.logs what ever it gets outta fetchBreeds
});