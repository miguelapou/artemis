var mongoose = require('mongoose'),
 Schema = mongoose.Schema;
// var User = require('./user');

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
  status: String,
  //THIS IS WHERE I THINK I PUT THE USER ID BIDNESS
  userId: {type: Schema.Types.ObjectId, ref: 'User'}
});

module.exports = mongoose.model('Job', JobSchema);
