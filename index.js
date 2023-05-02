const express = require('express');
const app = express();
const mongoose = require('mongoose');

// db connection


main().catch(err => console.log(err))

async function main() {
    await mongoose.connect("mongodb://127.0.0.1:27017/ecommerce");
    //mongodb://localhost:27017/
    console.log("Database connected...");
}



// built-in middlewares
app.use(express.json());
app.use(express.static('public'));


// routes
app.use('/users',require('./routes/user.routes'));
app.use('/products',require('./routes/product.routes'))

app.listen(4000, () => {
    console.log("Server is running on port 4000");
})