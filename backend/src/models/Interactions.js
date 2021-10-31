const {Schema, model} = require('mongoose');
const interactionSchedule = new Schema({
  idPost: {
    type: Number
  },
  idUser: [{
    type: Schema.Types.ObjectId,
    ref: 'User'
  }],
  photographerId: Number,
  photographerUrl: String,
  photographer: String,
  url: String,
  srcImageSmall: String,
  srcImageMedium: String,
  date: Date
});

interactionSchedule.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id;
    delete returnedObject._id;
    delete returnedObject.__v;
  }
});

const Interaction = model('Interaction', interactionSchedule);

module.exports = Interaction;