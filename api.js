let express = require("express");
let api = express.Router();

api.get('/', (req, res) => {
    res.json({
        status: "API is working",
        message: "Selamat datang di pusat data mahasiswa"
    })
});

// import contactControler
var mahasiswaController = require("./mahasiswaController")

// contact routes
api.route('/mahasiswa')
  .get(mahasiswaController.index)
  .post(mahasiswaController.new);
api.route('/mahasiswa/:nim')
  .get(mahasiswaController.view)
  .patch(mahasiswaController.update)
  .put(mahasiswaController.update)
  .delete(mahasiswaController.delete);

module.exports = api