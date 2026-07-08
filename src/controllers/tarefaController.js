const tarefaModel = require('../models/tarefaModel');
exports.criar = (req, res) => {
    const { titulo, descricao } = req.body;
    tarefaModel.criar(titulo, descricao, (err, resultado) => {
        if (err) {
            return res.status(500).json({ error: 'Erro ao criar tarefa' });
        }
        return res.status(201).json({ message: 'Tarefa criada com sucesso', tarefaId: resultado.insertId });
    });
}

exports.listar = (req, res) => {
    tarefaModel.listar((err, resultados) => {
        if (err) {
            return res.status(500).json({ error: 'Erro ao listar tarefas' });
        }
        return res.status(200).json({ tarefas: resultados });
    });
}

exports.atualizar = (req, res) => {
    const { id } = req.params;
    const { titulo, descricao } = req.body;
    tarefaModel.atualizar(id, titulo, descricao, (err, resultado) => {
        if (err) {
            return res.status(500).json({ error: 'Erro ao atualizar tarefa' });
        }
        return res.status(200).json({ message: 'Tarefa atualizada com sucesso' });
    });
}

exports.deletar = (req, res) => {
    const { id } = req.params;
    tarefaModel.deletar(id, (err, resultado) => {
        if (err) {
            return res.status(500).json({ error: 'Erro ao deletar tarefa' });
        }
        return res.status(200).json({ message: 'Tarefa deletada com sucesso' });
    });
}