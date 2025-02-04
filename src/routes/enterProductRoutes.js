const express = require("express");
const EnterProductController = require("../controllers/EnterProductController");

const router = express.Router();

router.post("/", EnterProductController.create);
router.get("/", EnterProductController.getAll);
router.get("/:id", EnterProductController.getById);
router.put("/:id", EnterProductController.update);
router.delete("/:id", EnterProductController.delete);

module.exports = router;
