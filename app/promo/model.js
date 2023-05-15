const { Schema, model } = require("mongoose");

const promoSchema = Schema({
  nama_promo: {
    type: String,
    default: "gebyar 100k",
  },
  sisa_kuota: {
    type: Number,
    default: 1000,
  },
  promo_tersedia: {
    type: Boolean,
    default: true,
  },
});

const Promo = model("Promo", promoSchema);

module.exports = Promo;
