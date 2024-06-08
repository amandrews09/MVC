const sequelize = require('../config/connection');
const { User, Post, Comment } = require('../models');

// Sample data for seeding
const seedUsers = require('./seeds/userData');
const seedPosts = require('./seeds/postData');
const seedComments = require('./seeds/commentData');

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log('\n----- DATABASE SYNCED -----\n');

  await seedUsers();
  console.log('\n----- USERS SEEDED -----\n');

  await seedPosts();
  console.log('\n----- POSTS SEEDED -----\n');

  await seedComments();
  console.log('\n----- COMMENTS SEEDED -----\n');

  process.exit(0);
};

seedAll();
