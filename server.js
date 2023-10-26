const path = require("path")
const express = require("express")

const app = express()

// console.log(__dirname)
// console.log(__filename)

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"))
})

app.get("/index.html", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"))
})

app.get("/style.css", (req, res) => {
  res.sendFile(path.join(__dirname, "style", "style.css"))
})

app.get("/about.html", (req, res) => {
  res.sendFile(path.join(__dirname, "js", "about.html"))
})

app.get("/contact.html", (req, res) => {
  res.sendFile(path.join(__dirname, "js", "contact.html"))
})

app.get("*", (req, res) => {
  res.status(404).send("NOT FOUND")
})

app.listen(4001, () => console.log("Server on..."))
