// Slower version of the doggo fetcher (GET API)

// const DOG_URL = "https://dog.ceo/api/breeds/image/random";

// const doggos = document.getElementById("dog-target");

// function addNewDoggo() {
//     const promise = fetch(DOG_URL);
//     promise
//         .then(function(response) {
//             const processingPromise = response.text();
//             return processingPromise;
//         })
//         .then(function(processedResponse) {
//             const dogObject = JSON.parse(processedResponse);
//             const img = document.createElement("img");
//             img.src = dogObject.message;
//             img.alt = "Cute doggo";
//             doggos.appendChild(img);
//         });
// }
// document.getElementById("dog-btn").addEventListener("click", addNewDoggo);



// Faster version of the doggo fetcher (GET API)

// const DOG_URL = "https://dog.ceo/api/breeds/image/random";

// const doggos = document.getElementById("dog-target");

// function addNewDoggo() {
//     const promise = fetch(DOG_URL);
//     promise
//         .then(response => response.json())
//         .then(function(processedResponse) {
//             const img = document.createElement("img");
//             img.src = processedResponse.message;
//             img.alt = "Cute doggo";
//             doggos.appendChild(img);
//         });
//     }



// Async, Await (GET API)

// const DOG_URL = "https://dog.ceo/api/breeds/image/random";

// const doggos = document.getElementById("dog-target");

// async function addNewDoggo() {
//     const response = await fetch(DOG_URL);
//     const processedResponse = await response.json();
//     const img = document.createElement("img");
//     img.src = processedResponse.message;
//     img.alt = "Cute doggo";
//     doggos.appendChild(img);
// }

// document.getElementById("dog-btn").addEventListener("click", addNewDoggo);



// POST API

const DOG_URL = "https://dog.ceo/api/breeds/image/random";

const doggos = document.getElementById("dog-target");

async function addNewDoggo() {
    const response = await fetch(DOG_URL, {
        method: "POST",
        body: JSON.stringify({breed: "husky"})
    });
    const processedResponse = await response.json();
    const img = document.createElement("img");
    img.src = processedResponse.message;
    img.alt = "Cute doggo";
    doggos.appendChild(img);
}

document.getElementById("dog-btn").addEventListener("click", addNewDoggo);