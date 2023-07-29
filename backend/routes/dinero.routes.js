const express = require("express");
const { getDineroAll, postDinero, deleteDinero, patchDinero, getDineroOne } = require("../controllers/dinero.controllers.js");

const router = express.Router();

router.get("/", getDineroAll);
router.post("/", postDinero);
router.delete("/:id", deleteDinero);
router.patch("/:id", patchDinero);
router.get("/one/:id", getDineroOne);


module.exports = router;