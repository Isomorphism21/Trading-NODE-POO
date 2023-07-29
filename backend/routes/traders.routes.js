const express = require("express");
const { getTradersAll, postTraders, deleteTraders, patchTraders, getTradersOne } = require("../controllers/traders.controllers.js");

const router = express.Router();

router.get("/", getTradersAll);
router.post("/", postTraders);
router.delete("/:id", deleteTraders);
router.patch("/:id", patchTraders);
router.get("/:id", getTradersOne);

module.exports = router;