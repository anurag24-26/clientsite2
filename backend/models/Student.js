const mongoose = require("mongoose");

// Roll number auto-increment plugin
const AutoIncrement = require("mongoose-sequence")(mongoose);

const studentSchema = new mongoose.Schema({
  name: { type: String, required: true },
  class: { type: String, required: true },
  dateOfBirth: { type: Date },
  admissionDate: { type: Date, default: Date.now },
  rollNo: { type: Number, unique: true }, // Will be auto-incremented
  marks: {
    physics: { type: Number, default: 0 },
    math: { type: Number, default: 0 },
    english: { type: Number, default: 0 },
    hindi: { type: Number, default: 0 },
  },
  maxMarks: {
    physics: { type: Number, default: 100 },
    math: { type: Number, default: 100 },
    english: { type: Number, default: 100 },
    hindi: { type: Number, default: 100 },
  },
});

// Auto-increment rollNo starting from 202500
studentSchema.plugin(AutoIncrement, { inc_field: "rollNo", start_seq: 202500 });

module.exports = mongoose.model("Student", studentSchema);
