const mongoose = require("mongoose");

// Create Schema for message model
const messageModel = mongoose.Schema(
  {
    sender: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    content: { type: String, trim: true },
    chat: { type: mongoose.Schema.Types.ObjectId, ref: "Chat" },
  },
  { timestamps: true }
);

// Export message model
const Message = mongoose.model("Message", messageModel);
module.exports = Message;
