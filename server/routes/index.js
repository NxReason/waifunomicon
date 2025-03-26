const router = require('express').Router();
const genshin = require('./gi-chars');

router.get('/', (_, res) => {
  res.json({ page: 'main' });
});
router.use('/genshin', genshin);

module.exports = router;
