const {AuthenticationError} = require('apollo-server-express');
const {User, Contact, Job} = require('../models');
const {signToken} = require('../utils/auth');

const resolvers = {
  Query: {
    contacts: async () => {
      return await Contact.find();
    },
    contact: async (parent, {_id}) => {
      return await Contact.findById(_id);
    },
    me: async (parent, args, context) => {
      if (context.user) {
        const userData = await User.findOne(
            {_id: context.user._id}).select('-__v -password');

        return userData;
      }

      throw new AuthenticationError('Not logged in');
    },
    jobs: async () => {
      return await Job.find().populate('contacts').populate('uploads');
    },
    job: async (parent, {_id}) => {
      return await Job.findById(_id).populate('contacts').populate('uploads');
    },
  },

  Mutation: {

    login: async (parent, {email, password}) => {
      const user = await User.findOne({email});

      if (!user) {
        throw new AuthenticationError('Incorrect credentials');
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError('Incorrect credentials');
      }

      const token = signToken(user);
      return {token, user};
    },
    addUser: async (parent, args) => {
      const user = await User.create(args);
      const token = signToken(user);

      return {token, user};
    },
    updateUser: async (parent, {id, input}) => {
      const user = await User.findByIdAndUpdate(id, input, {new: true});
      return user;
    },
    deleteUser: async (parent, {id}) => {
      const user = await User.findByIdAndRemove(id);
      return user;
    },
    addJob: async (parent, {input}) => {
      const job = new Job(input);
      await job.save();
      return job;
    },
    updateJob: async (parent, {id, input}) => {
      const job = await Job.findByIdAndUpdate(id, input, {new: true});
      return job;
    },
    deleteJob: async (parent, {id}) => {
      const job = await Job.findByIdAndRemove(id);
      return job;
    },
    addContact: async (parent, {jobId, input}) => {
      const job = await Job.findById(jobId);
      const contact = new Contact(input);
      job.contacts.push(contact);
      await job.save();
      return contact;
    },
    updateContact: async (parent, {id, input}) => {
      const contact = await Contact.findByIdAndUpdate(id, input, {new: true});
      return contact;
    },
    deleteContact: async (parent, {id}) => {
      const contact = await Contact.findByIdAndRemove(id);
      return contact;
    },


  },
};

module.exports = resolvers;
