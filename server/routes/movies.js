import express from 'express';

import { getNowPlayingMovies } from '../services/imdb';

let router = express.Router();

router.get('/nowPlaying', async (req, res) => {
  let nowPlaying;
  await getNowPlayingMovies()
    .then((response) => {
      nowPlaying = response;
    })
    .catch((error) => {
      console.log(error);
      nowPlaying = error;
    });
  return res.json(nowPlaying);
});

export default router;
