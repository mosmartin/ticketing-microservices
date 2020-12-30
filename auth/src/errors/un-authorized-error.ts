import { CustomError } from './custom-error';

export class UnAuthorizedError extends CustomError {
  statusCode = 401;

  constructor() {
    super('Not Authorized');

    // since I am extending a built in class
    Object.setPrototypeOf(this, UnAuthorizedError.prototype);
  }

  serializeErrors() {
    return [{ message: 'Not Authorized' }];
  }
}
