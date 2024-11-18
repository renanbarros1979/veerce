const express = require("express");
const router = express.Router();

// Rota para a página inicial
router.get("/", (req, res) => {
  res.render("base", {
    title: "Quem nós somos?",
    view: "quemsomos", 
  });
});

module.exports = router;
