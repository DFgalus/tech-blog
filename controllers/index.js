const router = require('express').Router();

//import dependent routes
const homeRoutes = require('./homeRoutes');
const apiRoutes = require('./api/index');
const dashboardRoutes = require('./dashboardRoutes');


router.use('/', homeRoutes);
router.use('/api', apiRoutes);
router.use('/dashboard', dashboardRoutes);


module.exports = router;
