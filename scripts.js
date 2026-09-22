require('dotenv').config();
const mysql = require('mysql2/promise');

// Configurações de conexão (ajuste a senha se necessário)
const config = {
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    port: process.env.DB_PORT,
};

async function setupDatabase() {
    try {
        // 1. Conecta ao servidor MySQL
        const connection = await mysql.createConnection(config);
        console.log("Conectado ao MySQL com sucesso.");

        // 2. Cria o banco de dados se não existir
        await connection.query("CREATE DATABASE IF NOT EXISTS tarefas");
        await connection.query("USE tarefas");
        console.log("Banco de dados 'tarefas' selecionado/criado.");

        // 3. Define e executa a query da tabela
        const createTableQuery = `
            CREATE TABLE IF NOT EXISTS tarefa (
              id INT AUTO_INCREMENT NOT NULL,
              titulo VARCHAR(255) NOT NULL,
              descricao VARCHAR(255) NOT NULL,
              PRIMARY KEY (id)
            );
        `;
        await connection.query(createTableQuery);
        console.log("Tabela 'tarefa' criada com sucesso.");

        // Fecha a conexão
        await connection.end();

    } catch (error) {
        console.error("Erro ao configurar o banco de dados:", error.message);
    }
}

setupDatabase();
