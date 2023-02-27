import { Router } from 'express';

import { CardsController } from '@infra/http/controllers/cards.controller';
import { logRequestDetails } from '../middlewares/logRequestDetails';

const cardsRouter = Router();
const cardsController = new CardsController();

cardsRouter.get('/', cardsController.list);
cardsRouter.post('/', cardsController.create);
cardsRouter.put('/:id', logRequestDetails, cardsController.update);
cardsRouter.delete('/:id', logRequestDetails, cardsController.delete);

export { cardsRouter };
