const path = require('path');
const express = require('express');
const session = require('express-session');
const exphbs = require('express-handlebars');
const Handlebars = require('handlebars');
const SequelizeStore = require('connect-session-sequelize')(session.Store);

const sequelize = require('./config/connection');
const routes = require('./controllers');
const helpers = require('./utils/helpers');

const app = express();
const PORT = process.env.PORT || 3001;

const hbs = exphbs.create({ 
  helpers,
  defaultLayout: 'main',
  layoutsDir: path.join(__dirname, 'views/layouts'),
  partialsDir: path.join(__dirname, 'views/partials'),
});

const sess = {
  secret: 'Super secret secret',
  cookie: {
      maxAge: 1000 * 60 * 30, // 30 minutes
  },
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
      db: sequelize,
  }),
};

app.use(session(sess));

// Register the format_date helper
Handlebars.registerHelper('format_date', (date) => {
  return new Date(date).toLocaleDateString();
});

// Logging middleware
app.use((req, res, next) => {
  console.log(`Session ID: ${req.sessionID}`);
  console.log(`Session Data: ${JSON.stringify(req.session)}`);
  next();
});

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

// Temporary route for debugging
app.get('/css/styles.css', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/css/styles.css'));
});

app.use(routes);

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log(`Now listening on port ${PORT}`));
});
