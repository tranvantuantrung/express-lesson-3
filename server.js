// server.js
// where your node app starts

// we've started you off with Express (https://expressjs.com/)
// but feel free to use whatever libraries or frameworks you'd like through `package.json`.
const express = require("express");
const app = express();

app.set("view engine", "pug");
app.set("views", "./views");

// https://expressjs.com/en/starter/basic-routing.html
app.get("/", (request, response) => {
  response.send("I love CodersX");
});

let todosList = ["Đi chợ", "Nấu cơm", "Rửa bát", "Học code tại CodersX"];

app.get("/todos", (req, res) => {
  let q = req.query.q;
  let matchedTodos;

  if (q) {
    matchedTodos = todosList.filter(
      todo => todo.toLowerCase().indexOf(q.toLowerCase()) !== -1
    );
  } else {
    matchedTodos = todosList;
  }

  res.render("todos", {
    todosList: matchedTodos
  });
});

// listen for requests :)
app.listen(process.env.PORT, () => {
  console.log("Server listening on port " + process.env.PORT);
});
