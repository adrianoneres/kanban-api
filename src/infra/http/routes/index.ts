import { Router } from 'express';

import { authenticationRouter } from './authentication.routes';
import { cardsRouter } from './cards.routes';

const routes = Router();

routes.use('/sign-in', authenticationRouter);
routes.use('/cards', cardsRouter);

export { routes };
