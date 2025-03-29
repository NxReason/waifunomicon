const dotenv = require('dotenv');
dotenv.config();

const express = require('express');
const cors = require('cors');
const router = require('./routes');
const { isConnected, populate, sync } = require('./models');

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
  await isConnected();
  if (isDev) {
    console.log('Dev mode');
    await sync();
    await populate();
  }
  console.log(`Server listening on port: ${PORT}`);
});

process.on('SIGTERM', () => {
  server.close(() => {
    console.log(`Server stopped. Port ${PORT} is free.`);
  });
});
