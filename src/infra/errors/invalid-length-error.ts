import { StatusCodes } from 'http-status-codes';

import { AppError } from './app-error';

export class InvalidLengthError extends AppError {
  constructor(message = 'value: invalid length') {
    super(message, StatusCodes.BAD_REQUEST);
  }
}
