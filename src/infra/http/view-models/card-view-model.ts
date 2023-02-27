import { Card } from '@app/entities/card';

export class CardViewModel {
  static toHttp(card: Card) {
    return {
      id: card.id,
      titulo: card.title.value,
      conteudo: card.content.value,
      lista: card.list.value,
    };
  }
}
