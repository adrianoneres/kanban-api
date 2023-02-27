import { StatusCodes } from 'http-status-codes';

import { AppError } from '@infra/errors/app-error';

export class InvalidTokenError extends AppError {
  constructor(message = 'token: invalid token') {
    super(message, StatusCodes.UNAUTHORIZED);
  }
}
