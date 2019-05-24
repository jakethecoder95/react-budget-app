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
  settings: {
    selectedType: { type: String, required: true, default: "month" }, // "all", "month", or "personalize"
    from: String, // "[month] [year]"
    to: String, // "[month] [year]" or "now"
    months: { type: Number, default: 1 }
  },
  items: [
    {
      type: Schema.Types.ObjectId,
      ref: "Item"
    }
  ],
  resetToken: String,
  resetTokenExpiration: Date
});

module.exports = mongoose.model("User", userSchema);
