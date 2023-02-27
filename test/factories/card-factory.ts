import { Card, CardProps } from '../../src/app/entities/card';
import { Content } from '../../src/app/entities/content';
import { List } from '../../src/app/entities/list';
import { Title } from '../../src/app/entities/title';

type Override = Partial<CardProps>;

export function makeCard(override: Override = {}, id?: string): Card {
  return new Card(
    {
      title: new Title('The best task'),
      content: new Content('This is an awesome description for this task'),
      list: new List('to-do'),
      ...override,
    },
    id,
  );
}
