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

  console.log(`\nCATEGORIES SEEDED!`)

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


  console.log(`\nUSERS SEEDED!`)

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

  console.log(`\nCONVERSATIONS SEEDED!`)
  // seeds for comments

  // seeds for like

  // seeds for posts
  await Post.deleteMany();

  const postTextSeeds = [
    "Me: \"Do you have vegan options?\"\nWaitress: \"Is vegetarian food okay?\"\nMe: \"Is monopoly money okay?\"",

    "A small ATM room having two ACs and 4 tubelights, working 24/7, is asking me not to print a receipt to save the environment.",

    "I’m tired of people telling me to turn off my lights to save the environment. I tried it once, and nearly killed some bloke on a bike.",

    "We all have to do our part for the environment. And there are many different ways one can save energy. I normally use the couch.",

    "Me: \"I had a vegan hot dog.\" Them: \"Why do you always mention you're vegan...\" Me next time: \"I had a hot dog\" Them: \"WHAT?! I THOUGHT YOU WERE VEGAN?!\"",

    "The hardest part about being vegan? \n\nTbh, it's having to wake up at 5AM to milk the almonds.",

    "If you meet someone new, start talking about global warming. It’s a real icebreaker.",

    "If Mac users care more about the environment than Windows users, then why do Macs have a trash can and Windows has a recycling bin?"
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

  console.log(`\nPOSTS SEEDED!`)



  // seeds for results
  await Result.deleteMany();

  const resultData = []

  const numberOfResultEntries = 100;

  for (let i = 0; i <= numberOfResultEntries; i++) {
    resultData.push(
      {
        // messed with the math to make it seem less uniform
        food: Math.floor(Math.random() * 100),
        housing: Math.floor(Math.random() * 60),
        transportation: Math.floor(Math.random() * 80),
        waste: Math.floor(Math.random() * 30),
        lifestyle: Math.floor(Math.random() * 70),
      }
    )
  }

  const results = await Result.insertMany(resultData);

  console.log(`\nRESULTS SEEDED!`)


  // seed challenges

  await Challenge.deleteMany();


  const returnChallengeEndDate = () => {
    const minDaysForChallenges = 10;
    const maxDaysForChallenges = 90 - minDaysForChallenges;

    const challengeDuration = Math.floor(Math.random() * maxDaysForChallenges + minDaysForChallenges)

    let todaysDate = new Date();
    let challengeEndDate = new Date(todaysDate);

    challengeEndDate.setDate(todaysDate.getDate() + challengeDuration);

    return challengeEndDate;
  };

  const pickARandomUser = () => users[Math.floor(Math.random() * users.length)]._id;

  const challengeData = [
    {
      challengeId: "bikeWork",
      title: 'Bicycle... rain or shine.',
      challenge: "In this challenge, you will bike to work everyday with NO EXCEPTIONS!",
      user: pickARandomUser(),
      dateStart: new Date(),
      dateEnd: returnChallengeEndDate()
    },
    {
      challengeId: "veganFood",
      title: 'Eat only vegan food!',
      challenge: "Show some love to our furry and four-legged friends and try veganism for the entirety of the challenge!",
      user: pickARandomUser(),
      dateStart: new Date(),
      dateEnd: returnChallengeEndDate()
    },
    {
      challengeId: "noPlastic",
      title: 'No single use plastics!',
      challenge: "Do not consume any product that includes single use plastics until the challenge ends",
      user: pickARandomUser(),
      dateStart: new Date(),
      dateEnd: returnChallengeEndDate()
    },
    {
      challengeId: "cleanNature",
      title: 'Clean up nature!',
      challenge: "Volunteer to clean natural areas of garbage for at least 40 hours collectively before the challenge end date.",
      user: pickARandomUser(),
      dateStart: new Date(),
      dateEnd: returnChallengeEndDate()
    },
    {
      challengeId: "compostFood",
      title: 'Compost all of your food scraps.',
      challenge: "Start a compost pile and instead of throwing uneaten food in a landfill, turn it into something that helps nature.",
      user: pickARandomUser(),
      dateStart: + new Date(),
      dateEnd: returnChallengeEndDate()
    },
    {
      challengeId: "ultimateChallenge",
      title: 'Ultimate Challenge',
      challenge: "Complete every other challenge before their respective end dates.",
      user: pickARandomUser(),
      dateStart: new Date(),
      dateEnd: returnChallengeEndDate()
    }
  ];

  const challenge = await Challenge.insertMany(challengeData);

  console.log(`\nCHALLENGES SEEDED!`)


  console.log(`\n\nDATABASE SUCCESSFULLY SEEDED.\n\n`)
  process.exit();
});
