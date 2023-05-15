const { Schema, model } = require("mongoose");

const busSchema = Schema({
  nomor_bus: {
    type: Number,
  },
  // kursi_tersedia: [
  //   {
  //     type: Schema.Types.ObjectId,
  //     ref: "Seat",
  //   },
  // ],
  kursi_tersedia: {
    type: Array,
  },
});

const Bus = model("Bus", busSchema);

module.exports = Bus;
