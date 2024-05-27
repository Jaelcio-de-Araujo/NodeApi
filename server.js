import http from "http";

const PORT = 3000;

const server = http.createServer((req, res) =>{
    res.writeHead(200, {"content-Type": "text/plain"});
    res.end("Curso de Node.Js");
});

server.listen(PORT, () =>{
    console.log("Servidor escutando");
});