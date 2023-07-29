const express = require("express");
const { getAccionesAll, postAcciones, deleteAcciones, patchAcciones, getAccionesOne } = require("../controllers/acciones.controllers.js");

const router = express.Router();

router.get("/", getAccionesAll);
router.post("/", postAcciones);
router.delete("/:id", deleteAcciones);
router.patch("/:id", patchAcciones);
router.get("/one/:id", getAccionesOne);


module.exports = router;