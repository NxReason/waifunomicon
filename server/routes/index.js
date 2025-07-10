import { Router } from 'express';
const router = Router();

router.get('/', (req, res) => {
  res.send('main page');
});

export default router;
