const Promo = require("./model");

const getPromo = async (req, res, next) => {
  try {
    const promoData = await Promo.find();
    return res.json({
      error_code: 0,
      error_message: "",
      data: promoData,
    });
  } catch (err) {
    next(err);
  }
};

const addPromo = async (req, res, next) => {
  try {
    const payload = req.body;
    const promoData = new Promo(payload);
    await promoData.save();
    return res.json({
      error_code: 0,
      error_message: "",
      data: promoData,
    });
  } catch (err) {
    if (err && err.name === "ValidationError") {
      res.json({
        error: 1,
        message: err.message,
        fields: err.erros,
      });
    }
    next(err);
  }
};

const updatePromo = async (req, res, next) => {
  try {
    const { id } = req.params;
    // const payload = req.body;
    let promoData = await Promo.findById(id);
    let updatePromoData;
    if (promoData.sisa_kuota > 0) {
      updatePromoData = await Promo.findByIdAndUpdate(id, { $inc: { sisa_kuota: -1 } });
      return res.json({
        error_code: 0,
        error_message: "",
        data: promoData,
      });
    } else {
      updatePromoData = await Promo.findByIdAndUpdate(id, { $set: { promo_tersedia: false } });
      return res.json({
        error_code: 0,
        error_message: "",
        data: promoData,
      });
    }
  } catch (err) {
    if (err && err.name === "ValidationError") {
      res.json({
        error: 1,
        message: err.message,
        fields: err.erros,
      });
    }
    next(err);
  }
};

const getPromoIndex = async (req, res, next) => {
  try {
    const { id } = req.params;
    const promoData = await Promo.findById(id);
    return res.json({
      error_code: 0,
      error_message: "",
      data: promoData,
    });
  } catch (err) {
    next(err);
  }
};

const deletePromo = async (req, res, next) => {
  try {
    const { id } = req.params;
    const promoData = await Promo.findByIdAndDelete(id);
    return res.json({
      error: 0,
      message: "berhasil menghapus data",
      data: promoData,
    });
  } catch (err) {
    next(err);
  }
};
module.exports = { getPromo, getPromoIndex, addPromo, deletePromo, updatePromo };
