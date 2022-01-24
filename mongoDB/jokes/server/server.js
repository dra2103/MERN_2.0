// IMPORT ALL DEPENDENCIES
const express = require('express')
const app = express();

// configure mongoose
require("./config/mongoose.config")

// configure express
app.use(express.json())
app.use(express.urlencoded({extended: true}))

// Routes
require("./routes/jokes.routes")(app);


// listen to the port
app.listen(8000, () => console.log('listening on port: 8000'))