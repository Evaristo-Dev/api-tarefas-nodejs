const connection = require('../config/database');
module.exports = {
    criar: function(titulo, descricao, callback) {
        const query = 'INSERT INTO tarefas (titulo, descricao) VALUES (?, ?)';
        connection.query(query, [titulo, descricao], (err, resultado) => {
            if (err) {
                console.error('Erro ao criar tarefa no banco de dados:', err);
                return callback(err);
            }
            callback(null, resultado);
        });
    },
    listar: function(callback) {
        const query = 'SELECT * FROM tarefas';
        connection.query(query, (err, resultados) => {
            if (err) {
                console.error('Erro ao listar tarefas no banco de dados:', err);
                return callback(err);
            }
            callback(null, resultados);
        });
    },
    atualizar: function(id, titulo, descricao, callback) {
        const query = 'UPDATE tarefas SET titulo = ?, descricao = ? WHERE id = ?';
        connection.query(query, [titulo, descricao, id], (err, resultado) => {
            if (err) {
                console.error('Erro ao atualizar tarefa no banco de dados:', err);
                return callback(err);
            }
            callback(null, resultado);
        });
    },
    deletar: function(id, callback) {
        const query = 'DELETE FROM tarefas WHERE id = ?';
        connection.query(query, [id], (err, resultado) => {
            if (err) {
                console.error('Erro ao deletar tarefa no banco de dados:', err);
                return callback(err);
            }
            callback(null, resultado);
        });
    }

}