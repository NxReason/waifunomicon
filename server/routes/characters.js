import { Router } from 'express';
import * as controller from '../controllers/characters.js';

const router = Router();

router.get('/', controller.all);
router.get('/:id', controller.find);
router.post('/', controller.save);
router.patch('/:id', controller.update);
router.delete('/:id', controller.remove);
router.post('/:id/add-set', controller.addSet);

export default router;
