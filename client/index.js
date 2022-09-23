const fetchAsync = async () => {
    const rawData = await fetch("http://localhost:3000/dogs");
    const dogData = await rawData.json();
    console.log(dogData)

    let dogName;
    let dogAge;
    let dogBreed;
    for (let i = 0; i < dogData.length; i++) {
        dogName = dogData[i].name;
        dogAge = dogData[i].age;
        dogBreed = dogData[i].breed;

        const dogList = document.getElementById('list');
        let li = document.createElement('li');
        li.textContent = `${dogName} is a ${dogBreed} and is ${dogAge} years old`;
        dogList.appendChild(li)
    }
}

fetchAsync().catch(err => console.log(err))
// let dogImage
// const fetchDog = async () => {
//     const rawData = await fetch("http://localhost:3000/dogs");
//     const dogData = await rawData.json();
//     dogImage = dogData[0].img;
// }

// fetchDog()

// const button = document.getElementById('searchButton');
// button.addEventListener('click', () => {
//     const image = document.getElementById('image')
//     console.log(image)
//     console.log(dogImage)
//     image.src = dogImage;

// })
