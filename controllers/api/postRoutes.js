const router = require('express').Router();
const { Comment, Post, User } = require('../../models');
const withAuth = require('../../utils/auth');

// Create a new post
router.post('/', withAuth, async (req, res) => {
  try {
    const newPost = await Post.create({
      ...req.body,
      user_id: req.session.user_id,
    });

    res.status(200).json(newPost);
  } catch (err) {
    res.status(400).json(err);
  }
});

// Update a post
router.put('/:id', async (req, res) => {
  try {
      const postData = await Post.update(req.body, {
          where: {
              id: req.params.id,
          },
      });

      if (!postData[0]) {
          res.status(404).json({ message: 'No post found with this id!' });
          return;
      }

      res.status(200).json(postData);
  } catch (err) {
      res.status(500).json(err);
  }
});

router.delete('/:id', async (req, res) => {
  try {
      const postData = await Post.destroy({
          where: {
              id: req.params.id,
          },
      });

      if (!postData) {
          res.status(404).json({ message: 'No post found with this id!' });
          return;
      }

      res.status(200).json(postData);
  } catch (err) {
      res.status(500).json(err);
  }
});


module.exports = router;
