const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const StudentSchema = new Schema({
  roll_number: { type: String },
  name: { type: String },
  fathers_name: { type: String },
  semester_results: [
    {
      semester_number: { type: Number },
      subject_results: [
        {
          subject_name: { type: String },
          marks: { type: Number }
        }
      ],
      sgpi: { type: Number },
      cgpi: { type: Number }
    }
  ],
  cgpi: { type: Number },
  branch: { type: String },
  batch: { type: String }
});

let Student = mongoose.model('Student', StudentSchema);

module.exports = Student;