const express = require("express");
const router = express.Router();

let fruits = [
    {
        name: "Apple",
        color: "Red"
    },
    {
        name: "Banana",
        color: "Yellow"
    },
    {
        name: "Kiwi",
        color: "Green"
    },
    {
        name: "Grape",
        color: "Purple"
    },
]

// routes
router.get('/', (req, res) => {
    res.json(fruits);
})

router.get('/:id', (req, res) => {
    const id = req.params.id;
    const getFruit = fruits[id - 1];
    res.json(getFruit);
})

router.post('/', [check("color").not().isEmpty().trim()], (req, res) => {
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        res.json({error: errors.array()});
    } else {
        fruits.push(req.body);
        res.json(fruits);
    }
})

router.put('/:id', (req, res) => {
    let id = req.params.id - 1;
    let fruit = req.body;
    fruits[id] = fruit;
    res.json(fruits);
})

router.delete('/:id', (req, res) => {
    const id = req.params.id;
    const index = id - 1;
    fruits.splice(index, 1);
    res.json(fruits);
})

module.exports = router;