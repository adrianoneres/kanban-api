import { Router } from 'express';

import { CardsController } from '@infra/http/controllers/cards.controller';

const cardsRouter = Router();
const cardsController = new CardsController();

cardsRouter.post('/', cardsController.create);

export { cardsRouter };
