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

module.exports = router;