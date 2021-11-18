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

const bcrypt = require('bcrypt');



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

  // Seeds for Users
  await User.deleteMany();

  const userData = require(`./userData.js`)
  const saltRounds = 10;

  const usersWithHashedPasswordsPromiseArray = userData.map(
    async (user) => {
    let hashedPassword = await bcrypt.hash(user.password, saltRounds);
    user.password = hashedPassword;
    return user;
  })

  const usersWithHashedPasswords = await Promise.all(usersWithHashedPasswordsPromiseArray)

  const users = await User.insertMany(usersWithHashedPasswords)


  console.log('users seeded');
  console.log(users)


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

  const postTextSeeds = [
    "Me: \"Do you have vegan options?\"\nWaitress: \"is vegetarian food okay?\"\nMe: \"Is monopoly money okay?\"",

    "A small ATM room having two ACs and 4 tubelights, working 24/7, is asking me not to print a receipt to save the environment.",

    "’m tired of people telling me to turn off my lights to save the environment. I tried it once, and nearly killed some bloke on a bike.",

    "We all have to do our part for the environment. And there are many different ways one can save energy. I normally use the couch.",

    "Me: I had a vegan hot dog\nThem: Why do you always mention you're vegan...\nMe next time: I had a hot dog\nThem: WHAT?! I THOUGHT YOU WERE VEGAN?!",

    "The hardest part about being vegan? \n\nTbh, it's having to wake up at 5AM to milk the almonds.",

    "If you meet someone new, start talking about global warming. It’s a real icebreaker.",

    "If Mac users care more about the environment than Windows users, then why do Macs have a trash can and Windows has a recycling bin?."
  ]

  users.forEach(async (user, index) => {

    const postFormat = {
      post: postTextSeeds[index],
      date: + new Date(),
      user: user._id,
      comments: [],
      likes: []
    }

    await Post.create(postFormat)
  })

  // const posts = await Post.insertMany([
  //   {
  //       post: "hello worlds",
  //       date: + new Date(),
  //       user: pamela._id,
  //       comments: [],
  //       likes: []
  //   },
  //   {
  //     post: "this is a second post ",
  //     date: + new Date(),
  //     user: pamela._id,
  //     comments: [],
  //     likes: []
  // },
  // ]);

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
