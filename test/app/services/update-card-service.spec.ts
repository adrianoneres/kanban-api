import { makeCard } from '../../factories/card-factory';
import { RegisterNotFoundError } from '../../../src/infra/errors/register-not-found-error';
import { InMemoryCardsRepository } from '../../repositories/in-memory-cards-repository';
import { UpdateCardService } from '../../../src/app/use-cases/update-card.service';

describe('UpdateCardService', () => {
  it('should be able to update a card', async () => {
    const inMemoreyCardsRepository = new InMemoryCardsRepository();
    const updateCardService = new UpdateCardService(inMemoreyCardsRepository);

    const card = makeCard();

    inMemoreyCardsRepository.cards.push(card);

    const cards = await updateCardService.execute({
      id: card.id,
      title: 'Changed title',
      content: 'Changed content',
      list: 'doing',
    });

    expect(cards.title.value).toEqual('Changed title');
    expect(cards.content.value).toEqual('Changed content');
    expect(cards.list.value).toEqual('doing');
  });

  it('should throw an error when trying to update invalid id', async () => {
    const inMemoreyCardsRepository = new InMemoryCardsRepository();
    const updateCardService = new UpdateCardService(inMemoreyCardsRepository);

    expect(
      updateCardService.execute({
        id: 'invalid-id',
        title: 'Changed title',
        content: 'Changed content',
        list: 'to-do',
      }),
    ).rejects.toThrow(RegisterNotFoundError);
  });
});
