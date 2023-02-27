import { Card } from '@app/entities/card';

export interface CardsRepository {
  findAll(): Promise<Card[]>;
  create(card: Card): Promise<Card>;
}
