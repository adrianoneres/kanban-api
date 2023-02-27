import { makeCard } from '../../factories/card-factory';
import { InMemoryCardsRepository } from '../../repositories/in-memory-cards-repository';
import { CreateCardService } from '../../../src/app/use-cases/create-card.service';

describe('CreateCardService', () => {
  it('should be able to create a card', async () => {
    const inMemoreyCardsRepository = new InMemoryCardsRepository();
    const createCardsService = new CreateCardService(inMemoreyCardsRepository);
    const card = makeCard();

    await createCardsService.execute({
      title: card.title.value,
      content: card.content.value,
      list: card.list.value,
    });

    expect(inMemoreyCardsRepository.cards.length).toEqual(1);
  });
});
