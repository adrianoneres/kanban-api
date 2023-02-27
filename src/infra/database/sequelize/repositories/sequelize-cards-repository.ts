import { Card } from '@app/entities/card';
import { CardsRepository } from '@app/repositories/cards-respository';
import { SequelizeCardsMapper } from '@infra/database/sequelize/mappers/sequelize-cards-mapper';
import { Card as RawCard } from '..';

export class SequelizeCardsRepository implements CardsRepository {
  async findAll(): Promise<Card[]> {
    const cards = await RawCard.findAll();

    return cards.map(SequelizeCardsMapper.toDomain);
  }

  async findById(id: string): Promise<Card | null> {
    const raw = await RawCard.findByPk(id);

    if (!raw) return null;

    return SequelizeCardsMapper.toDomain(raw);
  }

  async create(card: Card): Promise<Card> {
    const raw = SequelizeCardsMapper.toSequelize(card);

    await RawCard.create(raw);

    return SequelizeCardsMapper.toDomain(raw);
  }

  async delete(id: string): Promise<void> {
    const card = await RawCard.findByPk(id);

    card?.destroy();
  }
}
