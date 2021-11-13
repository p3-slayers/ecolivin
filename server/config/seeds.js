const db = require('./connection');
const {
  User,
  Questionnaire,
  Category,
  Answer,
  Action,
  ActionAnswer,
  Post,
  Contact,
  Conversation,
  Message,
  Result
} = require('../models');

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
      name: 'name',
      text: 'I take public transit regularly to get to work/school.',
      category: categories[0]._id,
    },
    {
      name: 'name',
      text: 'I own a hybrid or electric car.',
      category: categories[0]._id,
    },
    {
      name: 'name',
      text: 'I ride my bike to get to a given destination as much as possible. ',
      category: categories[0]._id,
    },
    {
      name: 'name',
      text: 'When travelling, I take a train or bus instead of airplane if possible.',
      category: categories[0]._id,
    },
    {
      name: 'name',
      text: 'When possible, I walk to nearby locations instead of driving.',
      category: categories[0]._id,
    },

    //  Food
    {
      name: 'name',
      text: 'I eat an entirely plant-based diet.',
      category: categories[1]._id,
    },
    {
      name: 'name',
      text: 'I eat meat or seafood 1-2 days per week. ',
      category: categories[1]._id,
    },
    {
      name: 'name',
      text: 'I eat locally sourced food as much as possible. ',
      category: categories[1]._id,
    },
    {
      name: 'name',
      text: 'I grow more than 50% of my own food. ',
      category: categories[1]._id,
    },
    {
      name: 'name',
      text: 'I rarely eat dairy products.',
      category: categories[1]._id,
    },
    {
      name: 'name',
      text: 'I try to minimize my food waste. ',
      category: categories[1]._id,
    },
    {
      name: 'name',
      text: 'More than 50% of my food comes from regenerative resources. ',
      category: categories[1]._id,
    },
    {
      name: 'name',
      text: 'I eat seasonally as much as possible.',
      category: categories[1]._id,
    },

    // Waste
    {
      name: 'name',
      text: 'I recycle often.',
      category: categories[2]._id,
    },
    {
      name: 'name',
      text: 'I compost most food and paper waste.',
      category: categories[2]._id,
    },
    {
      name: 'name',
      text: 'I repurpose other people’s waste.',
      category: categories[2]._id,
    },
    {
      name: 'name',
      text: 'I switched to e-billing and removed mail subscriptions.',
      category: categories[2]._id,
    },
    {
      name: 'name',
      text: 'I use a fan instead of an air conditioner.',
      category: categories[2]._id,
    },
    {
      name: 'name',
      text: 'I buy products with less packaging. ',
      category: categories[2]._id,
    },
    {
      name: 'name',
      text: 'I avoid disposable or single-use products.',
      category: categories[2]._id,
    },
    {
      name: 'name',
      text: 'I mean plan to avoid extra waste. ',
      category: categories[2]._id,
    },

    //  Housing
    {
      name: 'name',
      text: 'I use a smart thermostat in my home. ',
      category: categories[3]._id,
    },
    {
      name: 'name',
      text: 'More than 75% of my home is powered by clean energy.',
      category: categories[3]._id,
    },
    {
      name: 'name',
      text: 'I use LED lightbulbs in my home.',
      category: categories[3]._id,
    },
    {
      name: 'name',
      text: 'I air-dry clothes instead of using a dryer.',
      category: categories[3]._id,
    },
    {
      name: 'name',
      text: 'I turn lights off when not in use at home.',
      category: categories[3]._id,
    },
    {
      name: 'name',
      text: 'I unplug all electronics not being used.',
      category: categories[3]._id,
    },
    {
      name: 'name',
      text: 'I take short showers instead of baths.',
      category: categories[3]._id,
    },
    {
      name: 'name',
      text: 'I have low flush toilets in my home.',
      category: categories[3]._id,
    },
    // Lifestyle
    {
      name: 'name',
      text: 'I buy new items once a month. ',
      category: categories[4]._id,
    },
    {
      name: 'name',
      text: 'I mostly second-hand shop. ',
      category: categories[4]._id,
    },
    {
      name: 'name',
      text: 'I use reusable water bottles and coffee cups daily. ',
      category: categories[4]._id,
    },
    {
      name: 'name',
      text: 'I bring reusable bags to grocery stores.',
      category: categories[4]._id,
    },
    {
      name: 'name',
      text: 'I purchase hygiene products packaged in biodegradable or compostable material.',
      category: categories[4]._id,
    },
    {
      name: 'name',
      text: 'I make homemade gifts for people. ',
      category: categories[4]._id,
    },
    {
      name: 'name',
      text: 'I donate used goods. ',
      category: categories[4]._id,
    },
    {
      name: 'name',
      text: 'I attend talks or events on sustainability. ',
      category: categories[4]._id,
    },
  ]);

  console.log('questions seeded');

  await Action.deleteMany();

  const actions = await Action.insertMany([
    {
      actionId: 't1',
      name: 'Carpool',
      description: 'Carpool to work/school or any event with a friend',
      category: categories[0]._id,
    },
    {
      actionId: 't1',
      name: 'Public Transit',
      description: 'Take public transit to work or school when possible',
      category: categories[0]._id,
    },
    {
      actionId: 't1',
      name: 'Bike',
      description: 'Bike to a given destination instead of driving',
      category: categories[0]._id,
    },
    {
      actionId: 't1',
      name: 'Plant-based Diet',
      description:
        'Switch to a 100% plant-based diet on a give day of the week.',
      category: categories[1]._id,
    },
    {
      actionId: 't1',
      name: 'Compost',
      description: 'Begin composting any food waste',
      category: categories[1]._id,
    },
    {
      actionId: 't1',
      name: 'Veggie Scraps',
      description:
        'Reuse veggie scraps and make broths or freeze for new recipes',
      category: categories[1]._id,
    },
    {
      actionId: 't1',
      name: 'Recycle',
      description:
        'Recycle products correctly, following your city/location guidelines',
      category: categories[2]._id,
    },
    {
      actionId: 't1',
      name: 'Water Bottle',
      description: 'Use a refillable water bottle instead of plastic bottles',
      category: categories[2]._id,
    },
    {
      actionId: 't1',
      name: 'Reusable cups',
      description: 'Bring a reusable cup to a coffee/tea shop to reduce waste',
      category: categories[2]._id,
    },
    {
      actionId: 't1',
      name: 'Shower',
      description:
        'Decrease shower time to 5 minutes, and switch from taking baths',
      category: categories[3]._id,
    },
    {
      actionId: 't1',
      name: 'Washer',
      description: 'Wash clothing on cold cycle insead of hot',
      category: categories[3]._id,
    },
    {
      actionId: 't1',
      name: 'Air-dry',
      description:
        'Air-dry clothing after washing instead of usering the drying machine',
      category: categories[3]._id,
    },
    {
      actionId: 't1',
      name: 'Lighting',
      description: 'Turn off lights when not in use',
      category: categories[3]._id,
    },
    {
      actionId: 't1',
      name: 'Unplug Electronics',
      description: 'Unplug electronics when not in use.',
      category: categories[3]._id,
    },
    {
      actionId: 't1',
      name: 'Lighting',
      description: 'Turn off lights when not in use',
      category: categories[3]._id,
    },
    {
      actionId: 't1',
      name: 'Used Items',
      description: 'But mostly used stuff and shop at second-hand stpres',
      category: categories[4]._id,
    },
    {
      actionId: 't1',
      name: 'Towels and Napkins',
      description:
        'Switch from single use paper towels and napkins to cloth towels and handkerchief',
      category: categories[4]._id,
    },
  ]);

  console.log('action seeded');

  // Seeds for Users
  await User.deleteMany();

  const pamela = await User.create({
    firstName: 'Pamela',
    lastName: 'Washington',
    email: 'pamela@testmail.com',
    password: 'password12345',
    profileImage: 'insertimage.png',
    answers: [
      {
        answer: 1,
        questions: [Questionnaire[0]],
      },
    ],
    actionAnswer: [
      {
        mondayAnswer: 10,
        action: [Action[0]],
      },
    ],
  });

  const exampleUser = await User.create({
    firstName: 'Elijah',
    lastName: 'Holt',
    email: 'eholt@testmail.com',
    password: 'password12345',
    profileImage: 'insertimage.png',
  });
  console.log(exampleUser);

  console.log('users seeded');

  // seeds for comments

  // seeds for like

  // seeds for posts
  await Post.deleteMany();

  const posts = await Post.insertMany([
    {
        post: "hello worlds",
        date: + new Date(),
        user: pamela._id,
        comments: [],
        likes: []
    },
    {
      post: "this is a second post ",
      date: + new Date(),
      user: pamela._id,
      comments: [],
      likes: []
  },
  ]);

  console.log('posts seeded');

  // seeds for results
  await Result.deleteMany();

  const results = await Result.insertMany([
    {
      food: 100.0,
      housing: 0.0,
      transportation: 0.0,
      waste: 1.1,
      lifestyle: 1.2
    },
  ]);

  console.log('results seeded');


  process.exit();
});
