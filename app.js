import express from "express";
import bodyParser from "body-parser";
import dotenv from 'dotenv';

const app = express();
const port = 3000;
dotenv.config();

const scriptFont = process.env.scriptFont;

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    
    res.render("index.ejs", {
        script: scriptFont
    });
})

app.listen(port, () => {
    console.log("Server running on port " + port);
})