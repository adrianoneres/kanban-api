import { Card } from '@app/entities/card';
import { Content } from '@app/entities/content';
import { List } from '@app/entities/list';
import { Title } from '@app/entities/title';

export class SequelizeCardsMapper {
  static toSequelize(card: Card) {
    return {
      id: card.id,
      title: card.title.value,
      content: card.content.value,
      list: card.list.value,
    };
  }

  static toDomain(raw: any): Card {
    return new Card(
      {
        title: new Title(raw.title),
        content: new Content(raw.content),
        list: new List(raw.list),
      },
      raw.id,
    );
  }
}
