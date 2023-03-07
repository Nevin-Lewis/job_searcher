const {Schema, model} = require('mongoose');


const jobSchema = new Schema({
  company: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  jobPostLink: {
    type: String,
  },
  salary: {
    type: Number,
  },
  description: {
    type: String,
  },
  location: {
    type: String,
  },
  skills: {
    type: [String],
  },
  tasks: {
    type: [String],
  },
  contacts: [{
    type: Schema.Types.ObjectId,
    ref: 'Contact',
  }],
  uploads: {
    type: Schema.Types.ObjectId,
    ref: 'Upload',
  },
});

const Job = model('Job', jobSchema);

module.exports = Job;
