import express from 'express';
import { json } from 'body-parser';

import { currentUserRouter } from './routes/current-user.routes';
import { signInRouter } from './routes/sign-in.routes';
import { signOutRouter } from './routes/sign-out.routes';
import { signUpRouter } from './routes/sign-up.routes';
import { errorHandler } from './middlewares/error-handler';

const app = express();

app.use(json());

app.use(currentUserRouter);
app.use(signInRouter);
app.use(signOutRouter);
app.use(signUpRouter);

app.use(errorHandler);

app.listen(3000, () => {
  console.log('🚀 Listerning on port 3000!');
});
