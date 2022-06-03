// import pdf from "pdf-creator-node";
// import fs from "fs";
var pdf = require("pdf-creator-node");
var fs = require("fs");
const img = require("./img");

var options = {
  format: "A3",
  orientation: "portrait",
  border: "10mm",
  header: {
    height: "45mm",
    contents: `<div class="logo">
    <br/>
    </div>`,
  },
  footer: {
    height: "28mm",
    contents: {
      first: `<footer style="background-image:url("${img}")">    
      <p>HOla saiko</p>
</footer>`,
      2: "Second page", // Any page number is working. 1-based index
      default:
        '<footer style="color: #444;">{{page}}</span>/<span>{{pages}}</footer>', // fallback value
      last: "Last Page",
    },
  },
};
var users = [
  {
    name: "Shyam",
    age: "26",
  },
  {
    name: "Navjot",
    age: "26",
  },
  {
    name: "Vitthal",
    age: "26",
  },
];
var document = {
  html: `
  <!DOCTYPE html>
<html lang="es">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>

  <style>
  header {
    background-color: red;
  }
  main {
    background-color: green;
  }

  header img {
    height: 5cm;
  }

  </style>

  <body>
    <main>
    <p>Hello world!!!!</p>
    <p>Hello world!!!!</p>
    <p>Hello world!!!!</p>
    <p>Hello world!!!!</p>
    <p>Hello world!!!!</p>
    <p>Hello world!!!!</p>
    <p>Hello world!!!!</p>
    <p>Hello world!!!!</p>
    <p>Hello world!!!!</p>
    <p>Hello world!!!!</p>
    <p>Hello world!!!!</p>
    <p>Hello world!!!!</p>
    <p>Hello world!!!!</p>
    <p>Hello world!!!!</p>
    <p>Hello world!!!!</p>
    <p>Hello world!!!!</p>
    <p>Hello world!!!!</p>
    <p>Hello world!!!!</p>
    <p>Hello world!!!!</p>
    <p>Hello world!!!!</p>
    <p>Hello world!!!!</p>
    <p>Hello world!!!!</p>
    <p>Hello world!!!!</p>
    <p>Hello world!!!!</p>
    <p>Hello world!!!!</p>
    <p>Hello world!!!!</p>
    <p>Hello world!!!!</p>
    <p>Hello world!!!!</p>
    <p>Hello world!!!!</p>
    <p>Hello world!!!!</p>
    <p>Hello world!!!!</p>
    <p>Hello world!!!!</p>
    <p>Hello world!!!!</p>
    <p>Hello world!!!!</p>
    <p>Hello world!!!!</p>
    <p>Hello world!!!!</p>
    <p>Hello world!!!!</p>
    <p>Hello world!!!!</p>
    <p>Hello world!!!!</p>
    <p>Hello world!!!!</p>
    <p>Hello world!!!!</p>
    <p>Hello world!!!!</p>
    <p>Hello world!!!!</p>
    <p>Hello world!!!!</p>
    <p>Hello world!!!!</p>
    <p>Hello world!!!!</p>
    <p>Hello world!!!!</p>
    <p>Hello world!!!!</p>
    <p>Hello world!!!!</p>
    <p>Hello world!!!!</p>
    <p>Hello world!!!!</p>
    <p>Hello world!!!!</p>
    <p>Hello world!!!!</p>
    <p>Hello world!!!!</p>
    <p>Hello world!!!!</p>
    <p>Hello world!!!!</p>
    <p>Hello world!!!!</p>
    <p>Hello world!!!!</p>
    <p>Hello world!!!!</p>
    <p>Hello world!!!!</p>
    <p>Hello world!!!!</p>
    <p>Hello world!!!!</p>
    <p>Hello world!!!!</p>
    <p>Hello world!!!!</p>
    <p>Hello world!!!!</p>
    <p>Hello world!!!!</p>
    <p>Hello world!!!!</p>
    <p>Hello world!!!!</p>
    <p>Hello world!!!!</p>
    <p>Hello world!!!!</p>
    <p>Hello world!!!!</p>
    <p>Hello world!!!!</p>
    <p>Hello world!!!!</p>
    <p>Hello world!!!!</p>
    <p>Hello world!!!!</p>
    <p>Hello world!!!!</p>
    <p>Hello world!!!!</p>
    <p>Hello world!!!!</p>
    <p>Hello world!!!!</p>
    <p>Hello world!!!!</p>
    <p>Hello world!!!!</p>
    <p>Hello world!!!!</p>
    <p>Hello world!!!!</p>
    <p>Hello world!!!!</p>
    <p>Hello world!!!!</p>
    <p>Hello world!!!!</p>
    <p>Hello world!!!!</p>
    <p>Hello world!!!!</p>
    <p>Hello world!!!!</p>
    <p>Hello world!!!!</p>
    <p>Hello world!!!!</p>
    <p>Hello world!!!!</p>
    <p>Hello world!!!!</p>
    <p>Hello world!!!!</p>
    <p>Hello world!!!!</p>
    <p>Hello world!!!!</p>
    <p>Hello world!!!!</p>
    <p>Hello world!!!!</p>
    <p>Hello world!!!!</p>
    <p>Hello world!!!!</p>
    <p>Hello world!!!!</p>
    <p>Hello world!!!!</p>
    <p>Hello world!!!!</p>
    <p>Hello world!!!!</p>
    <p>Hello world!!!!</p>
    <p>Hello world!!!!</p>
    <p>Hello world!!!!</p>
    <p>Hello world!!!!</p>
    <p>Hello world!!!!</p>
    <p>Hello world!!!!</p>

    </main>


  </body>
</html>

  `,
  data: {
    users: users,
  },
  path: "./output.pdf",
  type: "",
};

pdf
  .create(document, options)
  .then((res) => {
    console.log(res);
  })
  .catch((error) => {
    console.error(error);
  });
