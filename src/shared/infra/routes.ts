import { accountsRouter } from '@modules/account/infra/accounts.routes';
import { Router } from 'express';

export const routes = Router();

routes.use('/accounts', accountsRouter);
