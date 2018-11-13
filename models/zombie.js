const mongoose = require('mongoose');
const { Schema } = mongoose;

const zombieSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    enum: ['School', 'Hospital', 'Warehouse'],
  },
});

module.exports = mongoose.model('Zombie', zombieSchema);
