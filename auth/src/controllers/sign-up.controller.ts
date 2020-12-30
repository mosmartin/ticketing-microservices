import { RequestHandler } from 'express';
import jwt from 'jsonwebtoken';

import { BadRequestError } from '../errors/bad-request-error';
import { User } from '../models/User';

export const signUp: RequestHandler = async (req, res) => {
  const email = (req.body as { email: string }).email;
  const password = (req.body as { password: string }).password;

  const existingUser = await User.findOne({ email });

  if (existingUser) {
    throw new BadRequestError('User email already in use.');
  }

  const user = User.build({ email, password });
  await user.save();

  // generate jwt
  const userJwt = jwt.sign(
    {
      id: user.id,
      email: user.email,
    },
    process.env.JWT_SECRET_KEY!
  );

  // store the jwt in a session obj
  req.session = {
    jwt: userJwt,
  };

  res.status(201).json(user);
};
