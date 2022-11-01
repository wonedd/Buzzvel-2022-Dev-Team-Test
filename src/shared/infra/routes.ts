import { usersRouter } from '@modules/user/infra/users.routes';
import { Router } from 'express';

export const routes = Router();
const authenticateRoutes = Router();

routes.use('/', usersRouter);
routes.use('/sessions', authenticateRoutes);

export { authenticateRoutes };
