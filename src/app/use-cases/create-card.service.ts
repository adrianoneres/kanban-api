import { inject, injectable } from 'tsyringe';

import { Card } from '@app/entities/card';
import { Content } from '@app/entities/content';
import { List } from '@app/entities/list';
import { Title } from '@app/entities/title';
import { CardsRepository } from '@app/repositories/cards-respository';

interface CreateCardRequest {
  title: string;
  content: string;
  list: string;
}

type CreateCardResponse = Card;

@injectable()
export class CreateCardService {
  constructor(
    @inject('CardsRepository')
    private cardsRepository: CardsRepository,
  ) {}

  async execute({
    title,
    content,
    list,
  }: CreateCardRequest): Promise<CreateCardResponse> {
    const card = new Card({
      title: new Title(title),
      content: new Content(content),
      list: new List(list),
    });

    return this.cardsRepository.create(card);
  }
}
