import 'reflect-metadata';
import express from 'express';
import cors from 'cors';

import '@infra/containers';
import '@infra/database/sequelize';
import { routes } from '@infra/http/routes';

const app = express();

app.use(express.json());
app.use(cors());
app.use(routes);
app.listen(5001);
