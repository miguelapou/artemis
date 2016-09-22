var mongoose = require('mongoose');

var JobSchema = new mongoose.Schema({
  jobTitle: String,
  notes: String,
  companyName: String,
  dateApplied: String,
  coverLetter: String,
  contactName: String,
  contactEmail: String,
  interviewDate: String,
  jobPostLink: String,
  followUps: String,
  status: String
});

module.exports = mongoose.model('Job', JobSchema);
