const express = require("express");
const path = require("path");
const app = express();

app.use(express.static(path.join(__dirname, 'public/assets')));
// Configuração do EJS como view engine
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

// Rota principal
const indexRouter = require("./routes/index");
app.use("/", indexRouter);

// Rotas para categorias e produtos
const alunoRouter = require("./routes/aluno");

app.use("/aluno", alunoRouter);

const quemsomosRouter = require("./routes/quemsomos");

app.use("/quemsomos", quemsomosRouter);

// Iniciar o servidor e sincronizar com o banco de dados

app.listen(3000, () => {
  console.log("Servidor em execução na porta 3000");
});
