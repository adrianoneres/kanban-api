import { inject, injectable } from 'tsyringe';

import { CardsRepository } from '@app/repositories/cards-respository';
import { RegisterNotFoundError } from '@infra/errors/register-not-found-error';
import { Card } from '@app/entities/card';
import { Title } from '@app/entities/title';
import { Content } from '@app/entities/content';
import { List } from '@app/entities/list';

interface UpdateCardRequest {
  id: string;
  title: string;
  content: string;
  list: string;
}

type UpdateCardResponse = Card;

@injectable()
export class UpdateCardService {
  constructor(
    @inject('CardsRepository')
    private cardsRepository: CardsRepository,
  ) {}

  async execute({
    id,
    title,
    content,
    list,
  }: UpdateCardRequest): Promise<UpdateCardResponse> {
    const isExistentCard = await this.cardsRepository.findById(id);

    if (!isExistentCard) {
      throw new RegisterNotFoundError('card: not found');
    }

    const card = new Card(
      {
        title: new Title(title),
        content: new Content(content),
        list: new List(list),
      },
      id,
    );

    return this.cardsRepository.save(card);
  }
}
