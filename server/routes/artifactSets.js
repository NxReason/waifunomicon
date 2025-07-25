import { Router } from 'express';
import * as controller from '../controllers/artifactSets.js';

const router = Router();

router.get('/', controller.all);
router.get('/:id', controller.find);
router.post('/', controller.save);
router.patch('/:id', controller.update);
router.delete('/:id', controller.remove);

export default router;
