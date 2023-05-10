const mongoose = require("mongoose");
const { mongoUrl } = require("../config");

mongoose
    .connect(mongoUrl)
    .then((res) => console.log("Koneksi berhasil, buka di http://localhost:3000/matakuliah"))
    .catch((error) => console.log("Koneksi gagal  : ",error.message));