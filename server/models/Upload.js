const {Schema, model} = require('mongoose');

const upload = new Schema({
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

const Upload = model('Upload', upload);

module.exports = Upload;
