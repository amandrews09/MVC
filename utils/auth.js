const withAuth = (req, res, next) => {
  console.log('withAuth middleware:', req.session); // Add logging to check session data
  if (!req.session.logged_in) {
    console.log('User not logged in, redirecting to login page.');
    res.redirect('/login');
  } else {
    console.log('User is logged in:', req.session);
    next();
  }
};

module.exports = withAuth;
