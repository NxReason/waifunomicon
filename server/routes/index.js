const router = require('express').Router();
const genshin = require('./genshin');

router.get('/', (_, res) => {
  res.json({ page: 'main' });
});
router.use('/genshin', genshin);

module.exports = router;
