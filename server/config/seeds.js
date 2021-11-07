const db = require('./connection');
const { User, Questionnaire, Category, Answer, Action, ActionAnswer } = require('../models');

db.once('open', async () => {
  await Category.deleteMany();

  const categories = await Category.insertMany([
    { name: 'Transportation' },
    { name: 'Food' },
    { name: 'Waste' },
    { name: 'Housing' },
    { name: 'Lifestyle' },
  ]);

  console.log('categories seeded');

  await Questionnaire.deleteMany();

  const questions = await Questionnaire.insertMany([
    {
      text: 'Tin of Cookies',
      category: categories[0]._id,
    },
    {
      text: 'Tin of Cookies',
      category: categories[0]._id,
    },
    {
      text: 'Tin of Cookies',
      category: categories[0]._id,
    },
    {
      text: 'Tin of Cookies',
      category: categories[0]._id,
    }
  ]);

  console.log('questions seeded');




  await Action.deleteMany();

  const actions = await Action.insertMany([
    {
      name: 'my action name',
      description : 'my desc.',
      category: categories[0]._id,
    },
    {
      name: 'my action name',
      description : 'my desc.',
      category: categories[0]._id,
    },
    {
      name: 'my action name',
      description : 'my desc.',
      category: categories[0]._id,
    },
    {
      name: 'my action name',
      description : 'my desc.',
      category: categories[0]._id,
    }
  ]);

  console.log('action seeded');


  // Seeds for Users
  await User.deleteMany();

  await User.create({
    firstName: 'Pamela',
    lastName: 'Washington',
    email: 'pamela@testmail.com',
    password: 'password12345',
    profileImage: 'insertimage.png',
    answers: [
      {
        answer: 1,
        questions: [Questionnaire[0]]
      }
    ],
    actionAnswer: [
      {
        mondayAnswer: 10,
        action: [Action[0]]
      }
    ]
  });

  await User.create({
    firstName: 'Elijah',
    lastName: 'Holt',
    email: 'eholt@testmail.com',
    password: 'password12345',
    profileImage: 'insertimage.png'
  });

  console.log('users seeded');

  process.exit();
});
