import { RequestHandler } from 'express';
import { validationResult } from 'express-validator';
import { RequestValidationError } from '../errors/request-validation-errors';
import { DatabaseConnectionError } from '../errors/database-connection-error';

export const signUp: RequestHandler = async (req, res) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    throw new RequestValidationError(errors.array());
  }

  const { email, password } = req.body;

  throw new DatabaseConnectionError();

  res.status(201).json({ success: true });
};
