const express = require('express');
const router = express.Router();
const Dog = require('../models/dog');

router.get('/', (req, res) => {
    const dogsData = Dog.all;
    res.send(dogsData);
});

router.get('/:id', (req, res) => {
    try {
        const dogId = parseInt(req.params.id);
        const selectedDog = Dog.findById(dogId);
        res.send(selectedDog);
    } catch (err) {
        console.log(err);
        res.status(404).send(err);
    }
});

module.exports = router;
