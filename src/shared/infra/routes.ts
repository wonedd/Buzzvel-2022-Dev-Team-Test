import { usersRouter } from '@modules/user/infra/users.routes';
import { Router } from 'express';

export const routes = Router();

routes.use('/', usersRouter);
