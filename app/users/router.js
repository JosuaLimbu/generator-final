var express = require('express');
var router = express.Router();
const { index, findByKode, findByNama, createMatakuliah, deleteByKode, updateMatakuliah} = require('./controller')

router.get("/matakuliah", index);                   /* url: http://localhost:3000/matakuliah= */
router.get("/matakuliah/:kode", findByKode,);       /* url: http://localhost:3000/matakuliah/:kode*/

//Untuk findByNama, kita harus command dulu yang index atau menampilkan semua matakuliah
router.get("/matakuliah", findByNama);              /* url: http://localhost:3000/matakuliah?nama= */ 
router.post("/matakuliah", createMatakuliah);       /* url: http://localhost:3000 */
router.delete("/matakuliah/:kode", deleteByKode);   /* url: http://localhost:3000/matakuliah/:kode */
router.put("/matakuliah/:kode", updateMatakuliah);  /* url: http://localhost:3000/matakuliah/:kode */

module.exports = router;
