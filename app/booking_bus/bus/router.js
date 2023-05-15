const express = require("express");
const router = express.Router();
const busController = require("./controler");

router.get("/bus", busController.getBus);
router.get("/bus/:id", busController.getBusIndex);
router.post("/bus", busController.addBus);
router.delete("/bus/:id", busController.deleteBus);
router.put("/bus/:id", busController.updataBus);

module.exports = router;
