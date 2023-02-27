import { Router } from 'express';

import { AuthenticationController } from '@infra/http/controllers/authentication.controller';

const authenticationRouter = Router();
const authenticationController = new AuthenticationController();

authenticationRouter.post('/', authenticationController.create);

export { authenticationRouter };
