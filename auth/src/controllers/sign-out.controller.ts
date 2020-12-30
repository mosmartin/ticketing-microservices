import { RequestHandler } from 'express';

export const signOut: RequestHandler = (req, res) => {
  req.session = null;

  res.status(200).json({});
};
