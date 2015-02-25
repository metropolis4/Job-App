var Applicant = require('../models/applicants.js');

var indexControllers = {
        index: function(req, res) {
        res.render('index');
    },
    applicants: function(req, res){
        res.render('applicants');
    },
    newApp: function(req, res){
        var submittedData = req.body;
        var newApplicant = new Applicant({
            name: submittedData.name,
            bio: submittedData.bio,
            skills: submittedData.skills.split(','),
            exp: submittedData.exp,
            reason: submittedData.reason
        });
        newApplicant.save(function(err, result){
            res.redirect('/');
        });
    },
    showApplicants: function(req, res){
        Applicant.find({}, function(err, result){
            res.render('applicants', {
                applicants: result
            });
        });
    },
    delete: function(req, res){
        var id = req.body.id;
        Applicant.findById(id).remove().exec();
    }
};

module.exports = indexControllers;