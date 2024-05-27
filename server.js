import http from "http";

const PORT = 3000;

const rotas = {
    "/":"Curso de Express API",
    "/livros": "Entrei na rota livros",
    "/autores": "Entrei na rora autores"
}

const server = http.createServer((req, res) =>{
    res.writeHead(200, {"content-Type": "text/plain"});
    res.end(rotas[req.url]);
});

server.listen(PORT, () =>{
    console.log("Servidor escutando");
});