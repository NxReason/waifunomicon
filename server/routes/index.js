import { Router } from 'express';
import characters from './characters.js';
import artifactSets from './artifactSets.js';

const router = Router();

router.get('/', (req, res) => {
  res.send('main page');
});

router.use('/characters', characters);
router.use('/artifact-sets', artifactSets);

export default router;
