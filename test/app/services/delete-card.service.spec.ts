import { makeCard } from '../../factories/card-factory';
import { RegisterNotFoundError } from '../../../src/infra/errors/register-not-found-error';
import { InMemoryCardsRepository } from '../../repositories/in-memory-cards-repository';
import { DeleteCardService } from '../../../src/app/use-cases/delete-card.service';

describe('DeleteCardService', () => {
  it('should be able to delete a card', async () => {
    const inMemoreyCardsRepository = new InMemoryCardsRepository();
    const deleteCardService = new DeleteCardService(inMemoreyCardsRepository);

    const card = makeCard();

    inMemoreyCardsRepository.cards.push(card);
    inMemoreyCardsRepository.cards.push(makeCard());
    inMemoreyCardsRepository.cards.push(makeCard());

    const cards = await deleteCardService.execute({ id: card.id });

    expect(cards.length).toEqual(2);
  });

  it('should throw an error when trying to delete invalid id', async () => {
    const inMemoreyCardsRepository = new InMemoryCardsRepository();
    const deleteCardService = new DeleteCardService(inMemoreyCardsRepository);

    expect(deleteCardService.execute({ id: 'invalid-id' })).rejects.toThrow(
      RegisterNotFoundError,
    );
  });
});
