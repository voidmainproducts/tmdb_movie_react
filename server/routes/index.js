import express from 'express';

import test from './test';
import movies from './movies';

let router = express.Router();

router.use('/test', test);
router.use('/movies', movies);

export default router;
