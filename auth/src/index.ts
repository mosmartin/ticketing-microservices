import express from 'express';
import { json } from 'body-parser';

const app = express();

app.use(json());

app.get('/api/v1/users/me', (req, res) => {
  res.status(200).json({
    message: 'Hello there',
  });
});

app.listen(3000, () => {
  console.log('🚀 Listerning on port 3000!');
});
