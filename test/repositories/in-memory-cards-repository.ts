import { Card } from '../../src/app/entities/card';
import { CardsRepository } from '../../src/app/repositories/cards-respository';

export class InMemoryCardsRepository implements CardsRepository {
  public cards: Card[] = [];

  findAll(): Promise<Card[]> {
    return Promise.resolve(this.cards);
  }

  findById(id: string): Promise<Card | null> {
    const card = this.cards.find(item => item.id === id);

    if (!card) return Promise.resolve(null);

    return Promise.resolve(card);
  }

  async create(card: Card): Promise<Card> {
    this.cards.push(card);

    return Promise.resolve(card);
  }

  delete(id: string): Promise<void> {
    const index = this.cards.findIndex(item => item.id === id);

    this.cards.splice(index, 1);

    return Promise.resolve();
  }
}
