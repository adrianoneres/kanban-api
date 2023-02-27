import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { CreateCardService } from '@app/use-cases/create-card.service';
import { ListCardsService } from '@app/use-cases/list-cards.service';
import { DeleteCardService } from '@app/use-cases/delete-card.service';
import { StatusCodes } from 'http-status-codes';
import { CardViewModel } from '../view-models/card-view-model';

export class CardsController {
  public async list(request: Request, response: Response): Promise<Response> {
    const listCardsService = container.resolve(ListCardsService);

    const cards = await listCardsService.execute();

    return response
      .status(StatusCodes.OK)
      .json(cards.map(CardViewModel.toHttp));
  }

  public async create(request: Request, response: Response): Promise<Response> {
    const { titulo, conteudo } = request.body;

    const createCardService = container.resolve(CreateCardService);

    const card = await createCardService.execute({
      title: titulo,
      content: conteudo,
    });

    return response
      .status(StatusCodes.CREATED)
      .json(CardViewModel.toHttp(card));
  }

  public async delete(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const deleteCardService = container.resolve(DeleteCardService);

    const cards = await deleteCardService.execute({ id });

    return response
      .status(StatusCodes.OK)
      .json(cards.map(CardViewModel.toHttp));
  }
}
