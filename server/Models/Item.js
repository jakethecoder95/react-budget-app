const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  owner: {
    type: Schema.Types.ObjectId,
    ref: "User"
  },
  type: {
    type: String,
    require: true
  },
  catagory: {
    type: String
    // not required if item.type === "inc"
  },
  description: {
    type: String,
    required: true
  },
  value: {
    type: Number,
    ref: "Post"
  },
  date: {
    type: Date,
    require: false
  },
  persist: {
    type: Boolean,
    default: false
  }
});

module.exports = mongoose.model("Item", userSchema);
