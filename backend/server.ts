import express from "express";

const app = express();

app.use(express.json());

app.post("/", (req,res) => {
    const {name ,password} = req.body;
  res.send("hello world");
})

app.listen();