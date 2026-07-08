const express = require("express");

const router = express.Router();

const tarefaController = require("../controllers/tarefaController");

router.post("/", tarefaController.criar);
router.get("/", tarefaController.listar);
router.put("/:id", tarefaController.atualizar);
router.delete("/:id", tarefaController.deletar);
module.exports = router;