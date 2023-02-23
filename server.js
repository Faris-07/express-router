const express = require("express")
const app = express()
const port = 3000
const { check, validationResult } = require("express-validator");
const userRouter = require("../routes/users");
const fruitRouter = require("../routes/fruits");

// Express Routes
app.use(express.json());

app.use("/users", userRouter);
app.use("/fruits", fruitRouter);

app.use('/user', user);
app.use('/user/:id', user);
app.use('/fruit', fruit);
app.use('/fruit/:id', fruit);

app.listen(port, () => {
    console.log(`App listening on port ${port}`)
})
