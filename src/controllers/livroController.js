import livro from "../models/Livro.js";

class LivroController {

    static async listarLivros(req, res) {
        try {
            const listaLivros = await livro.find({});
            res.status(200).json(listaLivros);
        } catch (error) {
            res.status(500).json({ message: `${erro.message} - Falha na requisição` });
        }

    };

    static async listarLivroPorId(req, res) {
        try {
            const id = req.params.id;
            const livroEncontrado = await livro.findById(id);
            res.status(200).json(livroEncontrado);
        } catch (error) {
            res.status(500).json({ message: `${erro.message} - Falha na requisição do livro` });
        }

    };


    static async cadstrarLivro(req, res) {
        try {

            const novoLivro = livro.create(req.body);
            res.status(201).json({ message: "Criado com sucesso", livro: novoLivro })

        } catch (erro) {

            res.status(500).json({ message: `${erro.message} - Falha ao cadastrar livro.` });

        }

    };

    static async atualizarLivro(req, res) {
        try {
            const id = req.params.id;
            await livro.findByIdAndUpdate(id, req.body);
            res.status(200).json({ message: "Livro atualizado" });
        } catch (error) {
            res.status(500).json({ message: `${erro.message} - Falha na Atualização` });
        }

    };
    static async excluirLivro(req, res) {
        try {
            const id = req.params.id;
            await livro.findByIdAndDelete(id);
            res.status(200).json({ message: "Livro excluido com sucesso" });
        } catch (error) {
            res.status(500).json({ message: `${erro.message} - Falha na exclusão` });
        }

    };
};




export default LivroController;