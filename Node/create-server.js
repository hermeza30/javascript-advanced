const { INSPECT_MAX_BYTES } = require("buffer");
const http = require("http");
const PORT = 3000;
const server = http.createServer();
// server.on('request',(req, res) => {
//     res.writeHead(200,{
//         'Content-type':'application/json',
//     });
//     res.end(JSON.stringify({text:'Hello! Entrando a nuestro servidor'}));
// })
const listaAmigos = [
  { id: 0, nombre: "tony" },
  { id: 1, nombre: "elias" },
  { id: 2, nombre: "joni" },
];
server.on("request", (req, res) => {
  const splitUrl = req?.url?.split("/");
  if (req.method === "POST" && splitUrl[1] === "friends") {
    req.on("data", (data) => {
      listaAmigos.push(JSON.parse(data.toString()));
    });
    req.pipe(res);
  } else if (req.method === "GET" && splitUrl[1] === "friends") {
    const amigo = listaAmigos.find((ob) => ob.id === +splitUrl[2]);
    res.status = 200;
    res.setHeader("Content-type", "application/json");
    if (splitUrl.length === 3) {
      res.end(JSON.stringify(amigo));
    } else {
      res.end(JSON.stringify(listaAmigos));
    }
  } else if (splitUrl[1] === "messages") {
    res.status = 200;
    res.setHeader("Content-type", "text/html");
    res.write("<html>");
    res.write("<body>");
    res.write("<ul>");
    res.write("<li>Hola</li>");
    res.write("<li>Tony</li>");
    res.write("<li>Man</li>");
    res.write("</ul>");
    res.write("</body>");
    res.write("</html>");
    res.end();
  } else {
    res.status = 400;
    res.end(JSON.stringify({ text: "no encontrado" }));
  }
});
server.listen(PORT, () => console.log("Servidor escuchando puerto", PORT)); //127.0.0.1 as localhost
