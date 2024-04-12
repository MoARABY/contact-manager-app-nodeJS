const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
  {
    userName: { type: String, required: [true, "Please Enter Username"] },
    email: {
      type: String,
      required: [true, "Please Enter email"],
      unique: [true, "This Email Already Taken"],
    },
    password: { type: String, required: [true, "Please Enter password"] },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("User", userSchema);
