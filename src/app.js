const express = require("express");
const app = express();
const path = require("path");

app.use(express.json());

const jsWaitTime = 10_000;
const cssWaitTime = 0;

app.get("/main.js", (req, res) => {
  wait(jsWaitTime, () => {
    res.sendFile(path.resolve(__dirname, "..", "main.js"));
  })
});

app.get("/main.css", (req, res) => {
  wait(cssWaitTime, () => {
    res.sendFile(path.resolve(__dirname, "..", "main.css"));
  })
});

app.get("/", (req, res) => {
  res.sendFile(path.resolve(__dirname, "..", "index.html"));
});

module.exports = app;

const wait = (timeout, fn) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      return resolve(fn());
    }, timeout);
  })
};