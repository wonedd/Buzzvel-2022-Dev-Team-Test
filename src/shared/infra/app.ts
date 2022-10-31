/* eslint-disable no-console */
/* eslint-disable @typescript-eslint/no-unused-vars */
import 'reflect-metadata';
import express, { Request, Response, NextFunction } from 'express';
import { routes } from './routes';
import '@shared/container';

const app = express();

app.use(express.json());

app.use(routes);

export { app };
