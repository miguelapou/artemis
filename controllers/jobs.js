var express = require('express');
var Job = require('../models/job');
var User = require('../models/user');
var router = express.Router();

router.route('/')
  .get(function(req, res) {
    Job.find({userId: req.user.id}, function(err, jobs) {
      console.log(req.user.id)
      if (err) return res.status(500).send(err);

      return res.send(jobs);
    });
  })
  // userId: User._id,
  .post(function(req, res) {
    var job = new Job(req.body);
    job.userId = req.user.id;
    job.save(function(err, job) {
      return res.send(job);
    });

    // Job.create(req.body, function(err, job) {
    //   if (err) return res.status(500).send(err);

    //   return res.send(job);
    // });
  });

router.route('/:id')
  .get(function(req, res) {
    Job.findById(req.params.id, function(err, job) {
      if (err) return res.status(500).send(err);

      return res.send(job);
    });
  })
  .put(function(req, res) {
    Job.findByIdAndUpdate(req.params.id, req.body, function(err) {
      if (err) return res.status(500).send(err);

      return res.send({ message: 'success' });
    });
  })
  .delete(function(req, res) {
    Job.findByIdAndRemove(req.params.id, function(err) {
      if (err) return res.status(500).send(err);

      return res.send({ message: 'success' });
    });
  });

module.exports = router;
