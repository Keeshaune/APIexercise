const dogsData = require('../data.js')

class Dog {
    constructor(data) {
        this.id = data.id;
        this.name = data.name;
        this.age = data.age;
        this.breed = data.breed;
    }

    static get all() {
        const dogs = dogsData.map( dog => new Dog(dog));
        return dogs;
    }

    static findById(id) {
        try {
            const dogData = dogsData.filter((dog) => dog.id === id)[0];
            const dog = new Dog(dogData);
            return dog;
        } catch (err) {
            throw new Error('That dog does not exist!');
        }
    }
}

module.exports = Dog;
