const express = require("express");
const app = express();
const port = 3000;
const _ = require("lodash");

app.get("/", (req, res) => {
  res.send(`grade = ${getGrade(_.random(1, 30))}`);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

function getGrade(score) {
  let grade;
  // Write your code here
  25 < score && score <= 30
    ? (grade = "A")
    : 20 < score && score <= 25
    ? (grade = "B")
    : 15 < score && score <= 20
    ? (grade = "C")
    : 10 < score && score <= 15
    ? (grade = "D")
    : 5 < score && score <= 10
    ? (grade = "E")
    : (grade = "F");
  return grade;
}

function getLetter(s) {
  let letter;
  // Write your code here
  switch (s[0]) {
    case "a":
    case "i":
    case "u":
    case "e":
    case "o":
      return "A";
    case "b":
    case "c":
    case "d":
    case "f":
    case "g":
      return "B";
    case "h":
    case "j":
    case "k":
    case "l":
    case "m":
      return "C";
    default:
      return "D";
  }
}

console.log(getLetter("yur mom"));
