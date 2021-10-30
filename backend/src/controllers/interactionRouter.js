const interactionRouter = require('express').Router();

const userStractor = require('../middlewares/userStractor');
const Interaction = require('../models/Interactions');

interactionRouter.post('/create-interaction/:idPost', userStractor, async(req, res, next) => {
  const { idPost } = req.params;
  const {userId: idUser} = req;

  try {
    if (!(idPost, idUser)) {
      return res.status(400).json({
        error: 'All parameters are required'
      });
    }

    const lookSimilarInteractions = await Interaction.find({idUser, idPost});
    
    if (lookSimilarInteractions.length === 0) {
      const newInteraction = new Interaction({ idPost, idUser, date: new Date() });
      const savedInteraction = await newInteraction.save();
      
      res.send(savedInteraction);
    } else
      res.send({});
  } catch (err) {
    next(err);
  }
});


module.exports = interactionRouter;