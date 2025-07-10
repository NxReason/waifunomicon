import 'dotenv/config';

import express from 'express';
import cors from 'cors';
import router from './routes/index.js';
import * as db from './models/db.js';

const app = express();

const PORT = process.env.PORT || 3000;
const isDev = process.env.NODE_ENV === 'dev';

if (isDev) {
  app.use(
    cors({
      origin: 'http://localhost:5173',
    })
  );
}

app.use(express.json());

app.use('/', router);

const server = app.listen(PORT, async () => {
  const isDbConnected = await db.auth();
  if (!isDbConnected) return;
  await db.sync();

  console.log(`Server listening on port: ${PORT}`);
});

process.on('SIGTERM', () => {
  server.close(() => {
    console.log(`Server stopped. Port ${PORT} is free.`);
  });
});
