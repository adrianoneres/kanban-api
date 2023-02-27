import { Request, Response, NextFunction } from 'express';

const cardActions = {
  DELETE: 'Removido',
  PUT: 'Alterado',
};

const dateTimeFormatter = Intl.DateTimeFormat('pt-BR', { dateStyle: 'short' });

export function logRequestDetails(
  request: Request,
  response: Response,
  next: NextFunction,
): void {
  response.on('finish', () => {
    const { id } = request.params;
    const { titulo } = request.body;
    const action = cardActions[request.method];
    const date = dateTimeFormatter.format(new Date());

    // eslint-disable-next-line no-console
    console.log(
      `${date} - Card ${id} - ${titulo ? `${titulo} - ` : ''}${action}`,
    );
  });

  return next();
}
