import { Card } from '../../src/app/entities/card';
import { CardsRepository } from '../../src/app/repositories/cards-respository';

export class InMemoryCardsRepository implements CardsRepository {
  public cards: Card[] = [];

  findAll(): Promise<Card[]> {
    return Promise.resolve(this.cards);
  }

  async create(card: Card): Promise<Card> {
    this.cards.push(card);

    return Promise.resolve(card);
  }
}
