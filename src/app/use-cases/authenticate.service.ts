import { injectable } from 'tsyringe';
import { sign } from 'jsonwebtoken';

import {
  AUTH_DEFAULT_PASSWORD,
  AUTH_DEFAULT_USERNAME,
  AUTH_EXPIRATION_TIME,
  AUTH_SECRET,
} from '@infra/config/env';
import { InvalidUsernameOrPasswordError } from '@infra/errors/invalid-username-password-error';

interface AuthenticateRequest {
  username: string;
  password: string;
}

type AuthenticateResponse = {
  token: string;
};

@injectable()
export class AuthenticateService {
  async execute({
    username,
    password,
  }: AuthenticateRequest): Promise<AuthenticateResponse> {
    const isInvalidCredentials =
      username !== AUTH_DEFAULT_USERNAME || password !== AUTH_DEFAULT_PASSWORD;

    if (isInvalidCredentials) {
      throw new InvalidUsernameOrPasswordError();
    }

    const token = sign({ name: username }, AUTH_SECRET, {
      subject: username,
      expiresIn: AUTH_EXPIRATION_TIME,
    });

    return { token };
  }
}
