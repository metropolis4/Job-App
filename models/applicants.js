var mongoose = require('mongoose');

var applicantSchema = mongoose.Schema({
    name: String,
    bio: String,
    skills: [String],
    exp: Number,
    reason: String
});

var Applicant = mongoose.model('Applicant', applicantSchema);

module.exports = Applicant;