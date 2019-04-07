const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  type: {
    type: String,
    require: true
  },
  description: {
    type: String,
    required: true
  },
  value: {
    type: Double,
    ref: "Post"
  },
  date: {
    type: Date,
    require: false
  },
  persistant: {
    type: Boolean,
    default: false
  }
});

module.exports = mongoose.model("Item", userSchema);
