const db = require('./connection');
const {Contact, Job, User} = require('../models');


db.once('open', async () => {
  await Contact.deleteMany();

  const contacts = await Contact.insertMany([
    {
      name: 'Mickey Mouse',
      cellphone: '5121234567',
      email: 'mickey@disney.com',
      title: 'Mr. Mouse',
    },
    {
      name: 'Minnie Mouse',
      cellphone: '2101234567',
      email: 'minnie@disney.com',
      title: 'Mrs. Mouse',
    },
    {
      name: 'Goofy',
      cellphone: '5120987654',
      email: 'goofy@disney.com',
      title: 'The Goof'},
  ]);
  console.log('contacts seeded');

  await Job.deleteMany();

  const jobs = await Job.insertMany(
      [
        {
          company: 'Disney Land',
          title: 'Regional Manager',
          jobPostLink: 'disneyland.com',
          salary: 89000,
          description: 'test description',
          location: 'California',
          skills: ['Patience', 'Adaptability', 'Kindness'],
          tasks: ['apply', 'interview', 'accept'],
          contacts: [contacts[0]._id, contacts[1]._id],
          jobStage: 1,
        },
        {
          company: 'Disney World',
          title: 'Regional Manager',
          jobPostLink: 'disneyworld.com',
          salary: 89000,
          description: 'test description',
          location: 'Florida',
          skills: ['Patience', 'Adaptability', 'Kindness'],
          tasks: ['apply', 'interview', 'accept'],
          contacts: [contacts[1]._id],
          jobStage: 2,
        },
        {
          company: 'Disney World Japan',
          title: 'Global Manager',
          jobPostLink: 'disneyworld.com',
          salary: 120000,
          description: 'test description',
          location: 'Japan',
          skills: ['Patience', 'Adaptability', 'Kindness'],
          tasks: ['apply', 'interview', 'accept'],
          contacts: [contacts[1]._id],
          jobStage: 3,
        },
      ]);

  console.log('jobs seeded');

  await User.deleteMany();

  await User.create(
      {
        username: 'testuser1',
        email: 'testemail@gmail.com',
        password: 'password123',
        jobs: [jobs[0]._id, jobs[1]._id],
      });
  await User.create( {
    username: 'testuser2',
    email: 'testemail2@gmail.com',
    password: 'passwrod123',
    jobs: [jobs[0]._id, jobs[1]._id],
  });
  console.log('users seeded');
  process.exit();
});
