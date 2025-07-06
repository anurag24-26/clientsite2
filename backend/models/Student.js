const mongoose = require("mongoose");
const AutoIncrement = require("mongoose-sequence")(mongoose);

// Define schema for individual test entries
const testResultSchema = new mongoose.Schema(
  {
    testMonth: { type: String, required: true }, // e.g., "July 2025"
    marks: {
      science: { type: Number, default: 0 },
      math: { type: Number, default: 0 },
      english: { type: Number, default: 0 },
      hindi: { type: Number, default: 0 },
      sst: { type: Number, default: 0 },
    },
    maxMarks: {
      science: { type: Number, default: 100 },
      math: { type: Number, default: 100 },
      english: { type: Number, default: 100 },
      hindi: { type: Number, default: 100 },
      sst: { type: Number, default: 100 },
    },
  },
  { _id: false }
); // disable _id for subdocuments

// Main student schema
const studentSchema = new mongoose.Schema({
  name: { type: String, required: true },
  class: { type: String, required: true },
  dateOfBirth: { type: Date },
  admissionDate: { type: Date, default: Date.now },
  rollNo: { type: Number, unique: true }, // Auto-incremented

  // Array of results for multiple months
  results: [testResultSchema],
});

// Roll No auto-increment
studentSchema.plugin(AutoIncrement, {
  inc_field: "rollNo",
  start_seq: 202500,
});

module.exports = mongoose.model("Student", studentSchema);
