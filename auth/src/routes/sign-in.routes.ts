import express from 'express';
import { body } from 'express-validator';

import { signIn } from '../controllers/sign-in.controller';
import { validateRequest } from '../middlewares/validate-request';

const router = express.Router();

router.post(
  '/api/v1/users/signin',
  [
    body('email').isEmail().withMessage('Email must be a valid email address'),
    body('password').trim().notEmpty().withMessage('Please supply a password'),
  ],
  validateRequest,
  signIn
);

export { router as signInRouter };
