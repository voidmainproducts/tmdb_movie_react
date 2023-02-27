import express from 'express';

let router = express.Router();

router.get('/', function (req, res) {
  console.log('hello', req);
  return res.json({ status: 'green' });
});

export default router;
