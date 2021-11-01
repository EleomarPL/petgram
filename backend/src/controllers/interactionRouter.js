const interactionRouter = require('express').Router();
const axios = require('axios');

const userStractor = require('../middlewares/userStractor');
const Interaction = require('../models/Interactions');

interactionRouter.get('/get-favorites-posts', userStractor, async(req, res, next) => {
  const {userId: idUser} = req;

  const getFavoritesPosts = await Interaction.find({idUser});
  res.send(getFavoritesPosts);
});
interactionRouter.get('/get-images/:searcher', userStractor, async(req, res, next) => {
  const {userId: idUser} = req;
  const {searcher} = req.params;

  const config = {
    headers: {
      Authorization: `Bearer ${process.env.KEYAPI}`
    }
  };

  try {
    const getInteractions = await Interaction.find({idUser});
    
    const getImagesFromExternalAPI = await axios.get(`https://api.pexels.com/v1/search?query=${searcher}`, config);
    const dataToSend = getImagesFromExternalAPI.data.photos.map(post => {
      let idPost = post.id;
      let index = getInteractions.findIndex(interacion => interacion.id === idPost);
      return {
        ...post,
        like: index !== -1,
        idPost: post.id,
        photographerId: post.photographer_id,
        photographerUrl: post.photographer_url,
        srcImageSmall: post.src.small,
        srcImageMedium: post.src.medium,
        date: Date
      };
      
    });

    res.send(dataToSend);
  } catch (err) {
    next(err);
  }
});
interactionRouter.get('/get-likes-post/:idPost', async(req, res) => {
  const { idPost } = req.params;

  const getPostLike = await Interaction.find({idPost});
  res.send({likes: getPostLike.length});
});
interactionRouter.post('/create-interaction/:idPost', userStractor, async(req, res, next) => {
  const { idPost } = req.params;
  const {userId: idUser} = req;
  const {
    photographerId, photographerUrl, photographer, url, srcImageSmall, srcImageMedium
  } = req.body;

  try {
    if (!(idPost, idUser, photographerId, photographerUrl, photographer, url, srcImageSmall, srcImageMedium)) {
      return res.status(400).json({
        error: 'All parameters are required'
      });
    }

    const lookSimilarInteractions = await Interaction.find({idUser, idPost});
    
    if (lookSimilarInteractions.length === 0) {
      const newInteraction = new Interaction({
        idPost, idUser, date: new Date(),
        photographerId, photographerUrl, photographer, url, srcImageSmall, srcImageMedium
      });
      const savedInteraction = await newInteraction.save();

      res.send(savedInteraction);
    } else
      res.send({});
  } catch (err) {
    next(err);
  }
});
interactionRouter.delete('/delete-interaction/:idPost', userStractor, async(req, res, next) => {
  const { idPost } = req.params;
  const {userId: idUser} = req;

  Interaction.findOneAndRemove({idUser, idPost}).then(() => {
    res.status(204).end();
  }).catch(err => {
    next(err);
  });
});


module.exports = interactionRouter;