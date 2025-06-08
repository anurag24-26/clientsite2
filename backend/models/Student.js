const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema({
  name: String,
  class: String,
  marks: {
    physics: Number,
    math: Number,
    english: Number,
    hindi: Number,
  },
  maxMarks: {
    physics: Number,
    math: Number,
    english: Number,
    hindi: Number,
  },
});

module.exports = mongoose.model("Student", studentSchema);
