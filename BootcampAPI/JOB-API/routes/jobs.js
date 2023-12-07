const express = require('express');
const router = express.Router();

// Importing jobs controller methods
const { getJobs, newJob } = require('../controllers/jobsControllers');

// Routing to the URL
router.route('/jobs').get(getJobs);

router.route('/job/new').post(newJob);

module.exports = router;
