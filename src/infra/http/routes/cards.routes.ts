import { Router } from 'express';

import { CardsController } from '@infra/http/controllers/cards.controller';

const cardsRouter = Router();
const cardsController = new CardsController();

cardsRouter.get('/', cardsController.list);
cardsRouter.post('/', cardsController.create);
cardsRouter.delete('/:id', cardsController.delete);

export { cardsRouter };
