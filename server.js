//import express and assign it to another variable
const express = require("express");
const app = express();

const path = require("path");

//identify your port
const PORT = 5000;

// get response
app.get("/", (req, res) => {
  res.send("<h1>HELLO WORLD</h1>");
});

// reading file by file
app.get("/index", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});
app.get("/contact", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "contact.html"));
});

// middleware static file
app.use(express.static(path.join(__dirname, "public")));
app.use(express.json());

// data to manipulate (simulation to a database)
const students = [
  {
    id: 0,
    name: "habib",
    age: 30,
  },
  {
    id: 1,
    name: "slim",
    age: 25,
  },
  {
    id: 2,
    name: "ghada",
    age: 28,
  },
];

//GET METHOD

app.get("/students", (req, res) => {
  res.json(students);
});

//GET ONE STUDENT

app.get("/students/:id", (req, res) => {
  res.json(
    students.filter((student) => student.id === parseInt(req.params.id))
  );
});
// POST METHOD
app.post("/students", (req, res) => {
  res.json(students.concat(req.body));
});

// DELETE METHOD

app.delete("/students/:id", (req, res) => {
  res.json(
    students.filter((student) => student.id !== parseInt(req.params.id))
  );
});

//UPDATE METHOD

app.put("/students/:id", (req, res) => {
  res.json(
    students.map((student) =>
      student.id === parseInt(req.params.id) ? req.body : student
    )
  );
});

//port listening

app.listen(PORT, console.log(`server is up and runing on port ${PORT}`));
