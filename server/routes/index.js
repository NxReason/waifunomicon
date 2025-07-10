import { Router } from 'express';
import characters from './characters.js';

const router = Router();

router.get('/', (req, res) => {
  res.send('main page');
});

router.use('/characters', characters);

export default router;
