import { RequestHandler } from 'express';
import { validationResult } from 'express-validator';
import { BadRequestError } from '../errors/bad-request-error';
import { RequestValidationError } from '../errors/request-validation-errors';
import { User } from '../models/User';

export const signUp: RequestHandler = async (req, res) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    throw new RequestValidationError(errors.array());
  }

  const email = (req.body as { email: string }).email;
  const password = (req.body as { password: string }).password;

  const existingUser = await User.findOne({ email });

  if (existingUser) {
    throw new BadRequestError('User email already in use.');
  }

  const user = User.build({ email, password });
  await user.save();

  res.status(201).json(user);
};
