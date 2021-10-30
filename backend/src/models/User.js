const {Schema, model} = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const userSchema = new Schema({
  name: {
    type: String,
    minlength: 2,
    maxlength: 45
  },
  lastName: {
    type: String,
    minlength: 2,
    maxlength: 45
  },
  motherLastName: {
    type: String,
    minlength: 2,
    maxlength: 45
  },
  email: {
    type: String,
    minlength: 10,
    maxlength: 80,
    unique: true
  },
  username: {
    type: String,
    minlength: 6,
    maxlength: 45,
    unique: true
  },
  password: String,
  date: Date
});

userSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id;
    delete returnedObject._id;
    delete returnedObject.__v;

    delete returnedObject.password;
  }
});

userSchema.plugin(uniqueValidator);

const User = model('User', userSchema);

module.exports = User;