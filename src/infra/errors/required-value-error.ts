import { StatusCodes } from 'http-status-codes';

import { AppError } from '@infra/errors/app-error';

export class RequiredValueError extends AppError {
  constructor(message = 'value: required value') {
    super(message, StatusCodes.BAD_REQUEST);
  }
}
