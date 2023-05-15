const express = require("express");
const router = express.Router();
const promoControler = require("./controler");

router.get("/promo", promoControler.getPromo);
router.get("/promo/:id", promoControler.getPromoIndex);
router.post("/promo", promoControler.addPromo);
router.delete("/promo/:id", promoControler.deletePromo);
router.put("/promo/:id", promoControler.updatePromo);

module.exports = router;
