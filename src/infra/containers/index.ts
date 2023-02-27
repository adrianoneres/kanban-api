import { container } from 'tsyringe';

import { CardsRepository } from '@app/repositories/cards-respository';
import { SequelizeCardsRepository } from '@infra/database/sequelize/repositories/sequelize-cards-repository';

container.registerSingleton<CardsRepository>(
  'CardsRepository',
  SequelizeCardsRepository,
);
