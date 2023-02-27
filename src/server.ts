/* eslint-disable no-console */
import '@infra/config/dotenv';
import 'reflect-metadata';
import 'express-async-errors';
import express, { NextFunction, Request, Response } from 'express';
import cors from 'cors';

import '@infra/containers';
import '@infra/database/sequelize';
import { routes } from '@infra/http/routes';
import { AppError } from '@infra/errors/app-error';

const app = express();

app.use(express.json());
app.use(cors());
app.use(routes);

app.use(
  (error: Error, _request: Request, response: Response, _: NextFunction) => {
    console.error(error);

    if (error instanceof AppError) {
      return response.status(error.statusCode).json({
        status: 'error',
        message: error.message,
      });
    }

    return response.status(500).json({
      status: 'error',
      message: error.message,
    });
  },
);

app.listen(5001, () => {
  console.log('📌 Server started at port 5000');
});
