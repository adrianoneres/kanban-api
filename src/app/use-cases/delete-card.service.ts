import { inject, injectable } from 'tsyringe';

import { CardsRepository } from '@app/repositories/cards-respository';
import { RegisterNotFoundError } from '@infra/errors/register-not-found-error';
import { Card } from '@app/entities/card';

interface DeleteCardRequest {
  id: string;
}

type DeleteCardResponse = Card[];

@injectable()
export class DeleteCardService {
  constructor(
    @inject('CardsRepository')
    private cardsRepository: CardsRepository,
  ) {}

  async execute({ id }: DeleteCardRequest): Promise<DeleteCardResponse> {
    const isExistentCard = await this.cardsRepository.findById(id);

    if (!isExistentCard) {
      throw new RegisterNotFoundError('card: not found');
    }

    await this.cardsRepository.delete(id);

    return this.cardsRepository.findAll();
  }
}
