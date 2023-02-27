import { randomUUID } from 'node:crypto';

import { makeCard } from '../../factories/card-factory';
import { Title } from '../../../src/app/entities/title';
import { Content } from '../../../src/app/entities/content';
import { List } from '../../../src/app/entities/list';

describe('Card', () => {
  it('should be able to create an card', async () => {
    const card = makeCard({}, randomUUID());

    expect(card.id).toBeTruthy();
    expect(card.title.value).toEqual('The best task');
    expect(card.content.value).toEqual(
      'This is an awesome description for this task',
    );
    expect(card.list.value).toEqual('to-do');
  });

  it('should be able set title', async () => {
    const card = makeCard();

    card.title = new Title('A different title');

    expect(card.title.value).toEqual('A different title');
  });

  it('should be able set content', async () => {
    const card = makeCard();

    card.content = new Content('A different content');

    expect(card.content.value).toEqual('A different content');
  });

  it('should be able set list', async () => {
    const card = makeCard();

    card.list = new List('doing');

    expect(card.list.value).toEqual('doing');
  });
});
