import { inject, injectable } from 'tsyringe';

import { Card } from '@app/entities/card';
import { CardsRepository } from '@app/repositories/cards-respository';

type ListCardResponse = Card[];

@injectable()
export class ListCardsService {
  constructor(
    @inject('CardsRepository')
    private cardsRepository: CardsRepository,
  ) {}

  async execute(): Promise<ListCardResponse> {
    return this.cardsRepository.findAll();
  }
}
