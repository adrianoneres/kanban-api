import { Card } from '@app/entities/card';

export interface CardsRepository {
  findAll(): Promise<Card[]>;
  findById(id: string): Promise<Card | null>;
  create(card: Card): Promise<Card>;
  save(card: Card): Promise<Card>;
  delete(id: string): Promise<void>;
}
