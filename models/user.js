const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: 2,
    maxlengthL: 30,
  },
  about: {
    type: String,
    required: true,
    minlength: 2,
    maxlengthL: 30,
  },
  avatar: {
    type: String,
    required: true,
    validate: {
      validator(v) {
        return /^https?:\/\//.test(v);
      },
      message: (props) => `${props.value} is not a valid link!`,
    },
  },
},
{
  versionKey: false,
});

module.exports = mongoose.model('user', userSchema);
