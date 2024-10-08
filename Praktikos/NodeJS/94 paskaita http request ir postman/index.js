import http from "http";
import fs from 'fs';

const server = http.createServer((req, res) => {
  // console.log(req.url);
  // res.write(`
  //   <head>
  //   <meta charset="UTF-8">
  //   </head>
  //   <body>
  //     <h1>Labux</h1>
  //     <p>${req.url}</p>
  //   </body>
  //   `);
  //  res.end();
  const path = "./pages/";

  switch (req.url) {
    case '/':
      path += 'home.html'
      break;
    case '/about':
      path += 'about.html'
      break;
    default:
      path += 'error.html'
      res.statusCode = 404;
  }

  fs.readFile(path, (err, data) => {
    if (err) {
      console.log(err);
      res.write('Bad internal err');
      res.statusCode = 500;
    } else { res.write(data); res.end() }
  }
  );



  server.listen(5000, 'localhost', () => {
    console.log("serveris paleistas 5000 porte");
  });
});