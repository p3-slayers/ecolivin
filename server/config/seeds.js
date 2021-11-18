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
  Result,
  Challenge
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

  
  // await Action.deleteMany();

  // const actions = await Action.insertMany([
  //   {
  //     actionId: 't1',
  //     name: 'Carpool',
  //     description: 'Carpool to work/school or any event with a friend',
  //     category: categories[0]._id,
  //   },
  //   {
  //     actionId: 't1',
  //     name: 'Public Transit',
  //     description: 'Take public transit to work or school when possible',
  //     category: categories[0]._id,
  //   },
  //   {
  //     actionId: 't1',
  //     name: 'Bike',
  //     description: 'Bike to a given destination instead of driving',
  //     category: categories[0]._id,
  //   },
  //   {
  //     actionId: 't1',
  //     name: 'Plant-based Diet',
  //     description:
  //       'Switch to a 100% plant-based diet on a give day of the week.',
  //     category: categories[1]._id,
  //   },
  //   {
  //     actionId: 't1',
  //     name: 'Compost',
  //     description: 'Begin composting any food waste',
  //     category: categories[1]._id,
  //   },
  //   {
  //     actionId: 't1',
  //     name: 'Veggie Scraps',
  //     description:
  //       'Reuse veggie scraps and make broths or freeze for new recipes',
  //     category: categories[1]._id,
  //   },
  //   {
  //     actionId: 't1',
  //     name: 'Recycle',
  //     description:
  //       'Recycle products correctly, following your city/location guidelines',
  //     category: categories[2]._id,
  //   },
  //   {
  //     actionId: 't1',
  //     name: 'Water Bottle',
  //     description: 'Use a refillable water bottle instead of plastic bottles',
  //     category: categories[2]._id,
  //   },
  //   {
  //     actionId: 't1',
  //     name: 'Reusable cups',
  //     description: 'Bring a reusable cup to a coffee/tea shop to reduce waste',
  //     category: categories[2]._id,
  //   },
  //   {
  //     actionId: 't1',
  //     name: 'Shower',
  //     description:
  //       'Decrease shower time to 5 minutes, and switch from taking baths',
  //     category: categories[3]._id,
  //   },
  //   {
  //     actionId: 't1',
  //     name: 'Washer',
  //     description: 'Wash clothing on cold cycle insead of hot',
  //     category: categories[3]._id,
  //   },
  //   {
  //     actionId: 't1',
  //     name: 'Air-dry',
  //     description:
  //       'Air-dry clothing after washing instead of usering the drying machine',
  //     category: categories[3]._id,
  //   },
  //   {
  //     actionId: 't1',
  //     name: 'Lighting',
  //     description: 'Turn off lights when not in use',
  //     category: categories[3]._id,
  //   },
  //   {
  //     actionId: 't1',
  //     name: 'Unplug Electronics',
  //     description: 'Unplug electronics when not in use.',
  //     category: categories[3]._id,
  //   },
  //   {
  //     actionId: 't1',
  //     name: 'Lighting',
  //     description: 'Turn off lights when not in use',
  //     category: categories[3]._id,
  //   },
  //   {
  //     actionId: 't1',
  //     name: 'Used Items',
  //     description: 'But mostly used stuff and shop at second-hand stpres',
  //     category: categories[4]._id,
  //   },
  //   {
  //     actionId: 't1',
  //     name: 'Towels and Napkins',
  //     description:
  //       'Switch from single use paper towels and napkins to cloth towels and handkerchief',
  //     category: categories[4]._id,
  //   },
  // ]);

  // console.log('action seeded');

  // Seeds for Users
  await User.deleteMany();

  const pamela = await User.create({
    firstName: 'Pamela',
    lastName: 'Washington',
    email: 'pamela@testmail.com',
    password: 'password12345',
    profileImage: 'insertimage.png',
    contacts: [
      {
        email: "eholt@testmail.com",
        name: "Elijah Holt"
      },
      {
        email: "brian@testmail.com",
        name: "Brian James"
      }
    ],
    // answers: [
    //   {
    //     answer: 1,
    //     questions: [Questionnaire[0]],
    //   },
    // ],
    // actionAnswer: [
    //   {
    //     mondayAnswer: 10,
    //     action: [Action[0]],
    //   },
    // ],
  });

  const elijah = await User.create({
    firstName: 'Elijah',
    lastName: 'Holt',
    email: 'eholt@testmail.com',
    password: 'password12345',
    profileImage: 'insertimage.png',
    contacts: [
      {
        email: "pamela@testmail.com",
        name: "Pamela Washington"
      },
      {
        email: "brian@testmail.com",
        name: "Brian James"
      }
    ],
    // answers: [
    //   {
    //     answer: 1,
    //     questions: [Questionnaire[0]],
    //   },
    // ],
    // actionAnswer: [
    //   {
    //     mondayAnswer: 10,
    //     action: [Action[0]],
    //   },
    // ],
  });

  const brian = await User.create({
    firstName: 'Brian',
    lastName: 'James',
    email: 'brian@testmail.com',
    password: 'password12345',
    // profileImage: 'insertimage.png',
    contacts: [
      {
        email: "pamela@testmail.com",
        name: "Pamela Washington"
      },
      {
        email: "eholt@testmail.com",
        name: "Elijah Holt"
      }
    ],
    // answers: [
    //   {
    //     answer: 1,
    //     questions: [Questionnaire[0]],
    //   },
    // ],
    // actionAnswer: [
    //   {
    //     mondayAnswer: 10,
    //     action: [Action[0]],
    //   },
    // ],
  });
  console.log(pamela);

  console.log('users seeded');

  await Conversation.deleteMany();

  const conversations = await Conversation.insertMany([
        {
          messages: [
            {sender: "pamela@testmail.com", text: "Hello from Pamela Washington"},
            {sender: "eholt@testmail.com", text: "Hello from Elijah Holt"}
          ],
          recipients: ["pamela@testmail.com", "eholt@testmail.com"]
        },
        {
          messages: [
            {sender: "brian@testmail.com", text: "Hello from Brian James"},
            {sender: "eholt@testmail.com", text: "Hello from Elijah Holt"}
          ],
          recipients: ["brian@testmail.com", "eholt@testmail.com"]
        },
        {
          messages: [
            {sender: "brian@testmail.com", text: "Hello from Brian James"},
            {sender: "pamela@testmail.com", text: "Hello from Pamela Washington"}
          ],
          recipients: ["pamela@testmail.com", "brian@testmail.com"]
        }
  ]);

  console.log(`conversations seeded`)
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


  // seed challenges

  await Challenge.deleteMany();

  const challenge = await Challenge.insertMany([
    {
      challengeId: "bikeWork",
      title: 'Bike forever',
      challenge: "In this challenge you will bike to work everyday for the rest of your life",
      user: pamela._id,
      dateStart: + new Date('August 19, 1975 23:15:30'),
      dateEnd: + new Date('August 22, 1975 23:15:30')
    },
    {
      challengeId: "bikeWork2",
      title: 'Bike forever2',
      challenge: "In this challenge you will bike to work everyday for the rest of your life",
      user: pamela._id,
      dateStart: + new Date('August 19, 1975 23:15:30'),
      dateEnd: + new Date('August 22, 1975 23:15:30')
    },
    {
      challengeId: "bikeWork3",
      title: 'Bike forever3',
      challenge: "In this challenge you will bike to work everyday for the rest of your life",
      user: pamela._id,
      dateStart: + new Date('August 19, 1975 23:15:30'),
      dateEnd: + new Date('August 22, 1975 23:15:30')
    }
  ]);


  process.exit();
});
