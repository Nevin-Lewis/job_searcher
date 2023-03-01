const { Schema, model } = require('mongoose');


const contactSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    cellphone: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    company: {
        type: Schema.Types.ObjectId,
        ref: 'Job'
    }
});

const Contact = model('Contact', contactSchema);

module.exports = Contact;