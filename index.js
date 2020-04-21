const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const app = express();
const cors = require("cors");

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use('/api/ibm', require('./routes/ibm'));


// Serve static assets if in production
if (process.env.NODE_ENV === "production") {
    console.log('We are prod');
    // Set static folder
    app.use(express.static("client/build"));

    // index.html for all page routes
    app.get("*", (req, res) => {
        res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
    });
}

const port = process.env.PORT || 5000;

app.listen(port, () => {
    console.log(`Server Running at ${port}`)
});
