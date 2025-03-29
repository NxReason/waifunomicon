const router = require('express').Router();
const controller = require('../../controllers/genshin/artifacts');

router.get('/', controller.all);
router.get('/:id', controller.find);
router.post('/', controller.create);
router.put('/:id', controller.update);
router.delete('/:id', controller.remove);

module.exports = router;
