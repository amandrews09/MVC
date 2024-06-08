const router = require('express').Router();
const { User } = require('../../models');
const withAuth = require('../../utils/auth');

router.post('/login', async (req, res) => {
  try {
    console.log('Login request received:', req.body);
    const userData = await User.findOne({ where: { email: req.body.email } });
    console.log('User data:', userData);

    if (!userData) {
      res.status(400).json({ message: 'Incorrect email or password, please try again' });
      return;
    }

    const validPassword = await userData.checkPassword(req.body.password);
    console.log('Password valid:', validPassword);

    if (!validPassword) {
      res.status(400).json({ message: 'Incorrect email or password, please try again' });
      return;
    }

    req.session.save(() => {
      req.session.user_id = userData.id;
      req.session.logged_in = true;
      console.log('Session saved:', req.session);
      
      res.json({ user: userData, message: 'You are now logged in!' });
    });

  } catch (err) {
    console.error('Error during login:', err);
    res.status(400).json(err);
  }
});

router.post('/logout', (req, res) => {
  if (req.session.logged_in) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});

router.post('/signup', async (req, res) => {
  try {
    const userData = await User.create(req.body);

    req.session.save(() => {
      req.session.user_id = userData.id;
      req.session.logged_in = true;

      res.json(userData);
    });
  } catch (err) {
    res.status(400).json(err);
  }
});

module.exports = router;
