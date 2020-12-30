import { RequestHandler } from 'express';
import jwt from 'jsonwebtoken';

import { User } from '../models/User';
import { BadRequestError } from '../errors/bad-request-error';
import { Password } from '../utils/PasswordManager';

export const signIn: RequestHandler = async (req, res) => {
  const email = (req.body as { email: string }).email;
  const password = (req.body as { password: string }).password;

  const existingUser = await User.findOne({ email });

  if (!existingUser) {
    throw new BadRequestError('Invalid Credentials');
  }

  const passwordMatch = await Password.compare(existingUser.password, password);

  if (!passwordMatch) {
    throw new BadRequestError('Invalid Credentials');
  }

  // generate jwt
  const userJwt = jwt.sign(
    {
      id: existingUser.id,
      email: existingUser.email,
    },
    process.env.JWT_SECRET_KEY!
  );

  // store the jwt in a session obj
  req.session = {
    jwt: userJwt,
  };

  res.status(200).json(existingUser);
};
