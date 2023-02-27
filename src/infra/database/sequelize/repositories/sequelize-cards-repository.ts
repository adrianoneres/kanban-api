import { Card } from '@app/entities/card';
import { CardsRepository } from '@app/repositories/cards-respository';
import { SequelizeCardsMapper } from '@infra/database/sequelize/mappers/sequelize-cards-mapper';
import { Card as RawCard } from '..';

export class SequelizeCardsRepository implements CardsRepository {
  async findAll(): Promise<Card[]> {
    const cards = await RawCard.findAll();

    return cards.map(SequelizeCardsMapper.toDomain);
  }

  async create(card: Card): Promise<Card> {
    const raw = SequelizeCardsMapper.toSequelize(card);

    await RawCard.create(raw);

    return SequelizeCardsMapper.toDomain(raw);
  }
}
