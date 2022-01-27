// Import Packages
const express = require("express");
const app = express();
const cors = require('cors')

// This will fire our mongoose.connect statement to initialize our database connection
// Config Mongoose
require("./config/mongoose.config");

//Config Express
app.use(cors());

app.use(express.json(), express.urlencoded({ extended: true }));

// This is where we import the users routes function from our user.routes.js file
// Routes
require("./routes/jobs.routes")(app)

// Port
app.listen(8000, () => console.log("The server is all fired up on port 8000"));