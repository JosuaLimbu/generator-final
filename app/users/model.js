const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    kodematakuliah: { type: String, required: [true, "kode matakuliah harus diisi"] },
    nama: { type: String, required: [true, "nama matakuliah harus diisi"] },
    ruangan: { type: String, required: [true, "ruangan matakuiah harus diisi"] },
    jam: { type: String, required: [true, "jam matakuliah harus diisi"] },
});

const User = mongoose.model("User", userSchema);

module.exports = User