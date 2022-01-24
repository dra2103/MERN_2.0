const JokeController = require("../controllers/jokes.controller")

module.exports = app => {
    app.get("/", JokeController.index)
    app.get("/api/jokes", JokeController.getAllJokes)
    app.post("/api/jokes/new", JokeController.createJoke)
    app.get("/api/joke/:_id", JokeController.findOnejoke)
    app.put("/api/joke/:_id", JokeController.updateJoke)
    app.delete("/api/joke/delete/:_id", JokeController.deletejoke)
}