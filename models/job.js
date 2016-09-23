var mongoose = require('mongoose');

var JobSchema = new mongoose.Schema({
  jobTitle: String,
  notes: String,
  companyName: String,
  dateApplied: String,
  coverLetter: String,
  contactPerson: String,
  contactInfo: String,
  interviewDate: String,
  jobLink: String,
  status: String
});

module.exports = mongoose.model('Job', JobSchema);
