const express = require("express");
const router = express.Router();

let users = [
    {
        name: "User 1",
        age: 30
    },
    {
        name: "User 2",
        age: 45
    },
    {
        name: "User 3",
        age: 27
    },

    
    {
        name: "User 4",
        age: 22
    }
]

// routes
router.get('/', (req, res) => {
    res.json(users);
})

router.get('/:id', (req, res) => {
    const id = req.params.id;
    const findUser = users[id - 1];
    res.json(findUser);
})

router.post('/', [check("name").not().isEmpty().trim()], (req, res) => {
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        res.json({error: errors.array()})
    } else {
        users.push(req.body);
        res.json(users);
    }
})

router.put('/:id', (req, res) => {
    let id = req.params.id - 1;
    let user = req.body;
    users[id] = user;
    res.json(users);
})

router.delete('/:id', (req, res) => {
    const id = req.params.id;
    const index = id - 1;
    users.splice(index, 1);
    res.json(users);
})

module.exports = router;