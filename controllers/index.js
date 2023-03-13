const router = require('express').Router();
const homePage = require('./home')

router.use('/', homeRoutes);
router.use('/api', apiRoutes);


module.exports = router;
