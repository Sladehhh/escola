const express = require("express");
const sqlite3 = require("sqlite3").verbose();
const bodyParser = require("body-parser");
const path = require("path");

const app = express();
const db = new sqlite3.Database("database.sqlite");

app.use(bodyParser.json());
app.use(express.static(__dirname)); // para servir os HTMLs e CSS

// Cria tabela
db.run(`CREATE TABLE IF NOT EXISTS usuarios (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    email TEXT,
    senha TEXT
)`);

// Rota para cadastro
app.post("/registrar", (req, res) => {
    const { email, senha } = req.body;
    db.run(`INSERT INTO usuarios (email, senha) VALUES (?, ?)`, [email, senha], (err) => {
        if (err) return res.status(500).send("Erro no servidor");
        res.status(200).send("Registrado!");
    });
});

app.listen(3000, () => console.log("Servidor rodando em http://localhost:3000"));
