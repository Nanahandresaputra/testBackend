const Bus = require("./model");
const getBus = async (req, res, next) => {
  try {
    const bus = await Bus.find();
    console.log(bus[0].kursi_tersedia.length);
    return res.json(bus);
  } catch (err) {
    next(err);
  }
};

const getBusIndex = async (req, res, next) => {
  try {
    const { id } = req.params;
    const bus = await Bus.findById(id);
    console.log(bus.kursi_tersedia.length);
    return res.json(bus);
  } catch (err) {
    next(err);
  }
};

const addBus = async (req, res, next) => {
  try {
    let payload = req.body;
    let seat = [];
    for (let i = 0; i <= 39; i++) {
      seat.push(i + 1);
    }
    const bus = new Bus({ ...payload, kursi_tersedia: seat });
    await bus.save();
    return res.json(bus);
  } catch (err) {
    if (err && err.name === "ValidationError") {
      return res.json({
        error: 1,
        message: err.message,
        fields: err.errors,
      });
    }
    next(err);
  }
};

const updataBus = async (req, res, next) => {
  try {
    let payload = req.body;
    let { id } = req.params;
    const bus = await Bus.findByIdAndUpdate(id, payload);
    return res.json(bus);
  } catch (err) {
    next(err);
  }
};

const deleteBus = async (req, res, next) => {
  try {
    const { id } = req.params;
    const bus = await Bus.findByIdAndDelete(id);
    return res.json(bus);
  } catch (err) {
    next(err);
  }
};

module.exports = { getBus, getBusIndex, addBus, deleteBus, updataBus };
