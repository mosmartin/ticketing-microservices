import { CustomError } from './custom-error';

export class DatabaseConnectionError extends CustomError {
  private reason = 'Error connecting to the database';
  statusCode = 500;

  constructor() {
    super();

    // since I am extending a built in class
    Object.setPrototypeOf(this, DatabaseConnectionError.prototype);
  }

  serializeErrors() {
    return [{ message: this.reason }];
  }
}
