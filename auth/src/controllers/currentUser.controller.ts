import { RequestHandler } from 'express';
import jwt from 'jsonwebtoken';

export const getCurrentUser: RequestHandler = (req, res) => {
  // if (!req.session || !req.session.jwt)
  if (!req.session?.jwt) {
    return res.status(404).json({ currentUser: null });
  }

  try {
    const payload = jwt.verify(req.session.jwt, process.env.JWT_SECRET_KEY!);

    res.status(200).json({ currentUser: payload });
  } catch (err) {
    return res.status(404).json({ currentUser: null });
  }
};
