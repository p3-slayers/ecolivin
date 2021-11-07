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
    // Transportation
    {
      text: 'I take public transit regularly to get to work/school.',
      category: categories[0]._id,
      },
    {
      text: 'I own a hybrid or electric car.',
      category: categories[0]._id,
    },
    {
      text: 'I ride my bike to get to a given destination as much as possible. ',
      category: categories[0]._id,
    },
    {
      text: 'When travelling, I take a train or bus instead of airplane if possible.',
      category: categories[0]._id,
    },
    {
      text: 'When possible, I walk to nearby locations instead of driving.',
      category: categories[0]._id,
    },
    
    //  Food 
    {
      text: 'I eat an entirely plant-based diet.',
      category: categories[1]._id
      },
      {
      text: 'I eat meat or seafood 1-2 days per week. ',
      category: categories[1]._id
      },
      {
      text: 'I eat locally sourced food as much as possible. ',
      category: categories[1]._id
      },
      {
      text: 'I grow more than 50% of my own food. ',
      category: categories[1]._id
      },
      {
      text: 'I rarely eat dairy products.',
      category: categories[1]._id
      },
      {
      text: 'I try to minimize my food waste. ',
      category: categories[1]._id
      },
      {
      text: 'More than 50% of my food comes from regenerative resources. ',
      category: categories[1]._id
      },
      {
      text: 'I eat seasonally as much as possible.',
      category: categories[1]._id,
      },

      // Waste
      {
        text: 'I recycle often.',
        category: categories[2]._id
      },
      {
        text: 'I compost most food and paper waste.',
        category: categories[2]._id
      },
      {
        text: 'I repurpose other people’s waste.',
        category: categories[2]._id
      },
      {
        text: 'I switched to e-billing and removed mail subscriptions.',
        category: categories[2]._id
      },
      {
        text: 'I use a fan instead of an air conditioner.',
        category: categories[2]._id
      },
      {
        text: 'I buy products with less packaging. ',
        category: categories[2]._id
      },
      {
        text: 'I avoid disposable or single-use products.',
        category: categories[2]._id
      },
      {
        text: 'I mean plan to avoid extra waste. ',
        category: categories[2]._id
      },

      //  Housing
      {
        text: 'I use a smart thermostat in my home. ',
        category: categories[3]._id
      },
      {
        text: 'More than 75% of my home is powered by clean energy.',
        category: categories[3]._id
      },
      {
        text: 'I use LED lightbulbs in my home.',
        category: categories[3]._id
      },
      {
        text: 'I air-dry clothes instead of using a dryer.',
        category: categories[3]._id
      },
      {
        text: 'I turn lights off when not in use at home.',
        category: categories[3]._id
      },
      {
        text: 'I unplug all electronics not being used.',
        category: categories[3]._id
      },
      {
        text: 'I take short showers instead of baths.',
        category: categories[3]._id
      },
      {
        text: 'I have low flush toilets in my home.',
        category: categories[3]._id
      },
      // Lifestyle
      {
        text: 'I buy new items once a month. ',
      category: categories[4]._id,
      },
      {
        text: 'I mostly second-hand shop. ',
      category: categories[4]._id,
      },
      {
        text: 'I use reusable water bottles and coffee cups daily. ',
      category: categories[4]._id,
      },
      {
        text: 'I bring reusable bags to grocery stores.',
      category: categories[4]._id,
      },
      {
        text: 'I purchase hygiene products packaged in biodegradable or compostable material.',
      category: categories[4]._id,
      },
      {
        text: 'I make homemade gifts for people. ',
      category: categories[4]._id,
      },
      {
        text: 'I donate used goods. ',
      category: categories[4]._id,
      },
      {
        text: 'I attend talks or events on sustainability. ',
      category: categories[4]._id,
      },
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
















