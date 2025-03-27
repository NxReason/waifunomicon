const router = require('express').Router();
const controller = require('../controllers/gi-characters');

router.get('/', controller.all);
router.post('/', controller.create);
router.put('/:id', controller.update);
router.delete('/:id', controller.remove);

module.exports = router;
