const express = require("express");

const UsersController = require("../controllers/UsersController");

const router = express.Router();

//Rota para adicionar usuários
router.post("/users", UsersController.createUser);

// Rota para exibir todos os uruários registrados
router.get("/users", UsersController.findAllUsers);

// Rota para exibir apenas um usuário pelo ID dele
router.get("/users/:id", UsersController.findUser);

// Rota para atualizar os dados do usuário
router.put("/users/:id", UsersController.updateUser);

// Rota para deletar usuário
router.delete("/users/:id", UsersController.deleteUser);

module.exports = router;
