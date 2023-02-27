import { Router } from 'express';

import { ensureIsAuthenticated } from '../middlewares/ensureIsAuthenticated';
import { authenticationRouter } from './authentication.routes';
import { cardsRouter } from './cards.routes';

const routes = Router();

routes.use('/login', authenticationRouter);

routes.use(ensureIsAuthenticated);

routes.use('/cards', cardsRouter);

export { routes };
