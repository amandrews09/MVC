const router = require('express').Router();
const userRoutes = require('./userRoutes');
const postRoutes = require('./postRoutes');
const commentRoutes = require('./commentRoutes');
const homeRoutes = require('./homeRoutes');
const apiRoutes = require('./api');

router.use('/users', userRoutes);
router.use('/posts', postRoutes);
router.use('/comments', commentRoutes);
router.use('/', homeRoutes);
router.use('/api', apiRoutes);

module.exports = router;
