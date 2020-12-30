import { RequestHandler } from 'express';
import { UnAuthorizedError } from '../errors/un-authorized-error';

export const auth: RequestHandler = (req, res, next) => {
  if (!req.currentUser) {
    throw new UnAuthorizedError();
  }

  next();
};
