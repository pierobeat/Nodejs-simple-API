var Mahasiswa = require("./mahasiswaModel");

// melihat semua data
exports.index = function (req, res) {
    Mahasiswa.get(function(err, data_mhsw) {
        if (err) {
            res.json({
                status: "error",
                message: err,
            }) 
        }
        res.json({
            status: "success",
            message: "Data Mahasiswa berhasil didapatkan",
            data: data_mhsw,
        })
    })
}

// pembuatan data baru
exports.new = function (req, res) {
    var data_mhsw = new Mahasiswa();
    data_mhsw.nama = req.body.nama ? req.body.nama : data_mhsw.nama;
    data_mhsw.nim = req.body.nim;
    data_mhsw.jurusan = req.body.jurusan;
    data_mhsw.gender = req.body.gender;
    data_mhsw.email = req.body.email;
    data_mhsw.phone = req.body.phone;

// simpan data & dan mengecek error
    data_mhsw.save(function (err) {
        res.json({
            message: 'New contact created!',
            data: data_mhsw
        });
    });
 };

 // melihat satu data berdasarkan nim
 exports.view = function (req, res) {
    Mahasiswa.findOne({nim:req.params.nim}, function (err, mahasiswa) {
        res.json({
            message: 'Contact details loading..',
            data: mahasiswa
        });
    });
 };
 
 // update data
 exports.update = function (req, res) {
    Mahasiswa.findOne({nim: req.params.nim}, function (err, data_mhsw) {
        // if (err)
        //     res.send(err);
        data_mhsw.nama = req.body.nama ? req.body.nama : data_mhsw.nama;
        data_mhsw.nim = req.body.nim;
        data_mhsw.jurusan = req.body.jurusan;
        data_mhsw.gender = req.body.gender;
        data_mhsw.email = req.body.email;
        data_mhsw.phone = req.body.phone;

 // menyimpan data yg sebelumnya diupdate
        data_mhsw.save(function (err) {
            if (err)
                res.json(err);
            res.json({
                message: 'Contact Info updated',
                data: data_mhsw
            });
        });
    });
 };

 // menghapus data
 exports.delete = function (req, res) {
    Mahasiswa.remove({
        nim:req.params.nim
    }, function (err,mahasiswa) {
        if(err) res.send(err);
        else res.json({
            message:'user deleted'
        })
    });
};