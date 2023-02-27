import { Request, Response, NextFunction } from 'express';
import { verify } from 'jsonwebtoken';

import { AUTH_SECRET } from '@infra/config/env';
import { InvalidTokenError } from '@infra/errors/invalid-token-error';

interface ITokenPayload {
  iat: number;
  exp: number;
  sub: string;
}

export function ensureIsAuthenticated(
  request: Request,
  response: Response,
  next: NextFunction,
): void {
  const authHeader = request.headers.authorization;

  if (!authHeader) {
    throw new InvalidTokenError();
  }

  const [, token] = authHeader.split(' ');

  try {
    const decoded = verify(token, AUTH_SECRET);

    const { sub } = decoded as ITokenPayload;

    // eslint-disable-next-line dot-notation
    request['user'] = {
      id: sub,
    };

    return next();
  } catch {
    throw new InvalidTokenError();
  }
}
