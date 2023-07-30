const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

// Create Schema for user model
const userSchema = mongoose.Schema(
  {
    name: { type: String, trim: true },
    email: { type: String, trim: true, unique: true },
    password: { type: String, trim: true },
    pic: {
      type: String,
      default:
        "https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg",
    },
  },
  { timestamps: true }
);

// Match Password
userSchema.methods.matchPassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};

// Modify Password
userSchema.pre("save", async function (next) {
  // If password is not modified
  if (!this.isModified("password")) {
    next();
  }

  // Else hash the password
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
});

// Export user model
const User = mongoose.model("User", userSchema);
module.exports = User;
