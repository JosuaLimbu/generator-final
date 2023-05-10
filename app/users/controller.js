const User = require("./model");

const index = async (req, res, next) => {
  try {
    const users = await User.find();
    res.send({ status: "success", message: "response success", data: users });
  } catch (error) {
    res.send({ status: "error", message: error.message });
  }
};

const findByKode = async (req, res, next) => {
  try {
    const user = await User.findOne({ kodematakuliah: req.params.kode });
    if (user) {
      res.send({ status: "success", message: "response succsess", data: user });
    } else {
      res.send({ status: "warning", message: "matakuliah tidak ditemukan" });
    }
  } catch (error) {
    res.send({ status: "error", message: error.message });
  }
};

const findByNama = async (req, res, next) => {
    try {
      const users = await User.find({ nama: { $regex: req.query.nama, $options: 'i' } });
      if (users.length > 0) {
        res.send({ status: "success", message: "response succsess", data: users });
      } else {
        res.send({ status: "warning", message: "matakuliah tidak ditemukan" });
      }
    } catch (error) {
      res.send({ status: "error", message: error.message });
    }
  };

const createMatakuliah = async (req, res, next) => {
    try {
      const { kodematakuliah, nama, ruangan, jam } = req.body;
      const user = new User({ kodematakuliah, nama, ruangan, jam });
      await user.save();
      res.send({ status: "success", message: "matakuliah berhasil ditambahkan", data: user });
    } catch (error) {
      res.send({ status: "error", message: error.message });
    }
  };
const deleteByKode = async (req, res, next) => {
    try {
      const deletedUser = await User.findOneAndDelete({ kodematakuliah: req.params.kode });
      if (deletedUser) {
        res.send({ status: "success", message: "matakuliah berhasil dihapus", data: deletedUser });
      } else {
        res.send({ status: "warning", message: "matakuliah tidak ditemukan" });
      }
    } catch (error) {
      res.send({ status: "error", message: error.message });
    }
  };

  const updateMatakuliah = async (req, res, next) => {
    try {
      const { nama, ruangan, jam } = req.body;
      const user = await User.findOne({ kodematakuliah: req.params.kode });
      if (!user) {
        res.send({ status: "warning", message: "matakuliah tidak ditemukan" });
        return;
      }
      user.nama = nama || user.nama;
      user.ruangan = ruangan || user.ruangan;
      user.jam = jam || user.jam;
      await user.save();
      res.send({ status: "success", message: "matakuliah berhasil diupdate", data: user });
    } catch (error) {
      res.send({ status: "error", message: error.message });
    }
  };

module.exports = {
  index,
  findByKode,
  findByNama,
  createMatakuliah,
  deleteByKode,
  updateMatakuliah,
};
