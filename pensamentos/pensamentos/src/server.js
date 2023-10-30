const express = require("express");
const handlebars = require("express-handlebars");
const path = require("path");
require("./database/index");

const app = express();
app.use(express.json());

app.use(express.urlencoded({extended: true}));

// Importando as rotas
const thoughtRoutes = require("./routes/thoughtsRoutes");
const usersRoutes = require("./routes/usersRoutes");

// Importa o engine handlebars
app.engine('handlebars', handlebars.engine());
app.set('view engine', 'handlebars');

app.set("views", path.join(__dirname, "views/"));

// Utilização de arquivos estáticos
app.use(express.static(__dirname + '/public'));

handlebars.create({
    partialsDir: path.join(__dirname, "views/partials")
});

// Utilizando os arquivos de rota que foram importado lá em cima
app.use(usersRoutes);
app.use(thoughtRoutes);

app.listen(3333, console.log("Servidor na porta 3333"));