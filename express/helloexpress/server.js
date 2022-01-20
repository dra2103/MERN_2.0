const express = require('express')
const app = express()
const port = 8000


app.get("/api", (req, res) => {
    res.json({ message: "I edited this in the terminal" });
});

app.listen(port, () => console.log(`Listening on port: ${port}`));
