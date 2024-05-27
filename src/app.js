import express from "express";

const app = express();

const livros = [
    {
        id: 1,
        titulo: "O Senhor dos Anéis"
    },
    {
        id: 2,
        titulo: "O Hobbit"
    }
]

function buscaLivro(id){
    return livros.findIndex(livro =>{
        return livro.id === Number(id);
    })
}

app.get("/", (req, res) => {
    res.status(200).send("Curso de Node.JS");
});

app.get("/livros", (req, res) => {
    res.status(200).json(livros);
});


app.get("/livros/:id", (req, res) => {
    const index = buscaLivro(req.params.id);
    res.status(201).send("Livro cadastrado com sucesso.");
});

app.post("/livros", (req, res) => {
    livros.push(req.body);
    res.status(201).send("Livro cadastrado com sucesso.");
});

app.put("/livros/:id", (req, res) => {
    const index = buscaLivro(req.params.id);
    livros[index].titulo = req.body.titulo;
    res.status(200).json(livros);
});


export default app;