const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const cors = require("cors"); // ✅ Import cors
const Student = require("./models/Student");
const bodyParser = require("body-parser");

const app = express();

// ✅ Enable CORS for all origins
app.use(cors());

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json()); // Add this if you send JSON in frontend POST

mongoose.connect(
  "mongodb+srv://collegefullstack:9TEQ6y9NPwDEJWxf@cluster0.6z27r.mongodb.net/coaching",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

// Serve static HTML form for data entry
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "views", "form.html"));
});
app.post("/submit", async (req, res) => {
  const students = req.body.students;

  if (!students || !Array.isArray(students)) {
    return res.status(400).send("Invalid student data.");
  }

  const promises = students.map((student) => {
    return new Student({
      name: student.name || "",
      class: student.class || "",
      marks: {
        physics: Number(student.marks?.physics) || 0,
        math: Number(student.marks?.math) || 0,
        english: Number(student.marks?.english) || 0,
        hindi: Number(student.marks?.hindi) || 0,
      },
      maxMarks: {
        physics: Number(student.maxMarks?.physics) || 0,
        math: Number(student.maxMarks?.math) || 0,
        english: Number(student.maxMarks?.english) || 0,
        hindi: Number(student.maxMarks?.hindi) || 0,
      },
    }).save();
  });

  try {
    await Promise.all(promises);
    res.send("✅ Student results uploaded successfully!");
  } catch (err) {
    console.error(err);
    res.status(500).send("❌ Error saving results.");
  }
});

// API to fetch result
app.get("/api/student/check", async (req, res) => {
  const { name, class: studentClass } = req.query;
  const student = await Student.findOne({ name, class: studentClass });

  if (!student) return res.status(404).json({ message: "❌ Result not found" });

  res.json(student);
});

// Start server
app.listen(5000, () =>
  console.log("🚀 Server running on http://localhost:5000")
);
