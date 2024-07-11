const express = require("express");
const mongoose = require("mongoose");
const fs = require("fs");
const Student = require("./model/studetModel");

const server = express();

mongoose
  .connect(
    "mongodb+srv://antrikshkatna03:GPnmSNSpkuXScd7G@cluster1.ydzieog.mongodb.net/?retryWrites=true&w=majority&appName=Cluster1"
  )
  .then(() => console.log("connected to db successfully"));

let data = fs.readFileSync("./detailed_result.json", "utf-8");

let parsedData = JSON.parse(data);

async function abcd() {
  let student = await Student.insertMany(parsedData);
  console.log(student[0]);
}
abcd();

server.use(express.json());

server.get("/user", async (req, res) => {
  let roll = req.headers.roll_number;
  let data = await Student.findOne({ roll_number: roll });
  res.send(data);
});

server.listen(8000, () => {
  console.log("server is listening on port 8000");
});
