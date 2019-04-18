const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  email: {
    type: String,
    require: true
  },
  password: {
    type: String,
    require: true
  },
  username: {
    type: String,
    required: true
  },
  items: [
    {
      type: Schema.Types.ObjectId,
      ref: "Item"
    }
  ]
});

module.exports = mongoose.model("User", userSchema);
