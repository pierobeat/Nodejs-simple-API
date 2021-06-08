var mongoose = require('mongoose');

// Setup schema
var contactSchema = mongoose.Schema({
  nama: {
      type: String,
      required: true
  },
  nim: {
      type: Number,
      required:true
  },
  jurusan: {
      type:String,
      required:true
  },
  email: {
      type: String,
      required: true
  },
  gender: String,
  phone: String,
  create_date: {
      type: Date,
      default: Date.now
  }
});

// Export model
var Mahasiswa = module.exports = mongoose.model('mahasiswa', contactSchema);
module.exports.get = function (callback, limit) {
  Mahasiswa.find(callback).limit(limit);
}