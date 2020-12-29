import express, { Request, Response, NextFunction } from 'express';
import 'express-async-errors';
import { json } from 'body-parser';
import mongoose from 'mongoose';

import { currentUserRouter } from './routes/current-user.routes';
import { signInRouter } from './routes/sign-in.routes';
import { signOutRouter } from './routes/sign-out.routes';
import { signUpRouter } from './routes/sign-up.routes';
import { errorHandler } from './middlewares/error-handler';
import { NotFoundError } from './errors/not-found-error';

const app = express();

app.use(json());

app.use(currentUserRouter);
app.use(signInRouter);
app.use(signOutRouter);
app.use(signUpRouter);

app.all('*', async () => {
  throw new NotFoundError();
});

app.use(errorHandler);

const start = async () => {
  try {
    await mongoose.connect('mongodb://auth-mongo-srv:27017/auth', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
    });

    console.log('👍 db connected!')
  } catch (err) {
    console.error(err);
  }

  app.listen(3000, () => {
    console.log('🚀 listerning on port 3000!');
  });
};

start();
