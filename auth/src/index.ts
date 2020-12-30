import mongoose from 'mongoose';

import { app } from './app';

const start = async () => {
  if (!process.env.JWT_SECRET_KEY) {
    throw new Error('JWT_SECRET_KEY must be defined');
  }

  try {
    await mongoose.connect('mongodb://auth-mongo-srv:27017/auth', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
    });

    console.log('👍 db connected!');
  } catch (err) {
    console.error(err);
  }

  app.listen(3000, () => {
    console.log('🚀 listerning on port 3000!');
  });
};

start();
