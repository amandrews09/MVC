const router = require('express').Router();

console.log('Loading userRoutes');
const userRoutes = require('./userRoutes');
console.log('userRoutes loaded');

console.log('Loading postRoutes');
const postRoutes = require('./postRoutes');
console.log('postRoutes loaded');

console.log('Loading commentRoutes');
const commentRoutes = require('./commentRoutes');
console.log('commentRoutes loaded');

router.use('/users', userRoutes);
router.use('/posts', postRoutes);
router.use('/comments', commentRoutes);

module.exports = router;
