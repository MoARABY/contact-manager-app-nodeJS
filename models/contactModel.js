const mongoose = require("mongoose");

const contactSchema = mongoose.Schema({
  // UserId: {
  //   type: mongoose.Schema.Types.ObjectId,
  //   required: true,
  //   ref: "User",
  // },
  name: {
    type: String,
    required: [true, "Please Insert Contact Name"],
  },
  email: { type: String },
  phone: { type: String, required: [true, "Please Insert Contact Phone"] },
});

module.exports = mongoose.model("contacts", contactSchema);
