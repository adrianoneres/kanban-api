import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import { container } from 'tsyringe';

import { AuthenticateService } from '@app/use-cases/authenticate.service';

export class AuthenticationController {
  public async create(request: Request, response: Response): Promise<Response> {
    const { login, senha } = request.body;

    const authenticateService = container.resolve(AuthenticateService);

    const tokenData = await authenticateService.execute({
      username: login,
      password: senha,
    });

    return response.status(StatusCodes.OK).json(tokenData);
  }
}
