const {Schema, model} = require('mongoose');

const userDocs = newSchema({
  type: {
    type: String,
    required: true,
    unique: false,
  },
  filename: {
    type: String,
    required: true,
    unique: true,
  },
  job: {
    type: Schema.Types.ObjectId,
    ref: 'Job',
  },
});

const Upload = model('Upload', userDocs);

module.exports = Upload;
