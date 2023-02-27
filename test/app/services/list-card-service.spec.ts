import { makeCard } from '../../factories/card-factory';
import { InMemoryCardsRepository } from '../../repositories/in-memory-cards-repository';
import { ListCardsService } from '../../../src/app/use-cases/list-cards.service';

describe('ListCardsService', () => {
  it('should be able to list all cards', async () => {
    const inMemoreyCardsRepository = new InMemoryCardsRepository();
    const listCardsService = new ListCardsService(inMemoreyCardsRepository);

    inMemoreyCardsRepository.cards.push(makeCard());
    inMemoreyCardsRepository.cards.push(makeCard());

    const cards = await listCardsService.execute();

    expect(cards.length).toEqual(2);
  });
});
