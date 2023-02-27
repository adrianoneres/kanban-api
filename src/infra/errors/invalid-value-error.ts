import { StatusCodes } from 'http-status-codes';

import { AppError } from './app-error';

export class InvalidValueError extends AppError {
  constructor(message = 'value: invalid value') {
    super(message, StatusCodes.BAD_REQUEST);
  }
}
