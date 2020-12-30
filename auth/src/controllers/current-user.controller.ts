import { RequestHandler } from 'express';

export const getCurrentUser: RequestHandler = (req, res) => {
  res.status(200).json({ currentUser: req.currentUser || null });
};
