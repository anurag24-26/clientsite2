const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const cors = require("cors");
const Student = require("./models/Student");
const bodyParser = require("body-parser");

const app = express();

// Middleware

app.use(
  cors({
    origin: "*", // Allow all origins (for development only)
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// MongoDB Connection
mongoose.connect(
  "mongodb+srv://collegefullstack:9TEQ6y9NPwDEJWxf@cluster0.6z27r.mongodb.net/coaching",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

// ===== Static Admin Panel Routes =====

// Admin login page
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "views", "index.html"));
});

// Student admission page
app.get("/admission", (req, res) => {
  res.sendFile(path.join(__dirname, "views", "admission.html"));
});

// Upload or edit result
app.get("/result", (req, res) => {
  res.sendFile(path.join(__dirname, "views", "result.html"));
});
app.get("/home", (req, res) => {
  res.sendFile(path.join(__dirname, "views", "home.html"));
});
// Serve admitted students view
app.get("/students", (req, res) => {
  res.sendFile(path.join(__dirname, "views", "students.html"));
});

// Student list view
app.get("/student-list", (req, res) => {
  res.sendFile(path.join(__dirname, "views", "student-list.html"));
});

// ===== Backend APIs =====

// Admit student
app.post("/admission", async (req, res) => {
  try {
    const { name, class: studentClass, dateOfBirth } = req.body;

    if (!name || !studentClass) {
      return res.status(400).send("Name and Class are required.");
    }

    const newStudent = new Student({
      name,
      class: studentClass,
      dateOfBirth: dateOfBirth ? new Date(dateOfBirth) : undefined,
    });

    await newStudent.save();
    res.status(201).send("✅ Student admitted successfully!");
  } catch (err) {
    console.error(err);
    res.status(500).send("❌ Error during admission.");
  }
});

// Get all students (for table dropdown or display)
app.get("/api/students", async (req, res) => {
  try {
    const students = await Student.find().sort({ rollNo: 1 });
    res.json(students); // ✅ Returns array
  } catch (err) {
    console.error("❌ Error fetching students:", err);
    res.status(500).json({ message: "❌ Failed to fetch students" }); // ✅ Return JSON
  }
});

// Update or insert marks for existing students
app.post("/submit", async (req, res) => {
  const students = req.body.students;

  if (!Array.isArray(students)) {
    return res.status(400).send("Invalid student data.");
  }

  try {
    for (const data of students) {
      const student = await Student.findOne({ rollNo: data.rollNo });

      if (student) {
        student.marks = {
          physics: Number(data.marks?.physics) || 0,
          math: Number(data.marks?.math) || 0,
          english: Number(data.marks?.english) || 0,
          hindi: Number(data.marks?.hindi) || 0,
        };
        student.maxMarks = {
          physics: Number(data.maxMarks?.physics) || 100,
          math: Number(data.maxMarks?.math) || 100,
          english: Number(data.maxMarks?.english) || 100,
          hindi: Number(data.maxMarks?.hindi) || 100,
        };
        await student.save();
      }
    }

    res.send("✅ Student results uploaded/updated successfully!");
  } catch (err) {
    console.error(err);
    res.status(500).send("❌ Error saving results.");
  }
});
// Delete student by roll number
// DELETE /api/student?rollNo=123 OR ?name=John&class=10

app.delete("/api/student", async (req, res) => {
  const { rollNo, name, class: studentClass } = req.query;

  try {
    if (rollNo && !isNaN(rollNo)) {
      const deletedByRoll = await Student.findOneAndDelete({
        rollNo: Number(rollNo),
      });
      if (deletedByRoll) {
        return res.json({ message: "✅ Student deleted by roll number." });
      }
    }

    if (name && studentClass) {
      const deletedByName = await Student.findOneAndDelete({
        name,
        class: studentClass,
      });
      if (deletedByName) {
        return res.json({ message: "✅ Student deleted by name and class." });
      }
    }

    // ❌ If nothing was deleted
    return res.status(404).json({
      message: "❌ Student not found. Provide valid rollNo or name & class.",
    });
  } catch (err) {
    console.error("❌ Deletion Error:", err);
    return res.status(500).json({
      message: "❌ Server error while deleting student.",
    });
  }
});

// Fetch individual student result by roll number
app.get("/api/student/check", async (req, res) => {
  const { name, class: studentClass, rollNo } = req.query;

  // Validation
  if (!name || !studentClass) {
    return res.status(400).json({ message: "❌ Name and class are required." });
  }

  // Prepare query
  const query = {
    name: name.trim(),
    class: studentClass.trim(),
  };

  if (rollNo) {
    query.rollNo = Number(rollNo);
  }

  try {
    const student = await Student.findOne(query);
    if (!student) {
      return res.status(404).json({ message: "❌ Result not found." });
    }

    res.json(student);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "❌ Server error while fetching result." });
  }
});

// ===== Start Server =====
app.listen(5000, () =>
  console.log("🚀 Admin Panel running on http://localhost:5000")
);
