import { usersRouter } from '@modules/user/infra/users.routes';
import { AuthenticateUserController } from '@modules/user/useCases/authenticateUser/AuthenticateUserController';
import { Router } from 'express';
import { ensureAuthenticated } from 'src/middlewares/ensureAuthenticated';

export const routes = Router();

routes.use('/users', ensureAuthenticated, usersRouter);

const authenticateRoutes = Router();

const authenticateUserController = new AuthenticateUserController();

authenticateRoutes.post('/sessions', authenticateUserController.handle);

export { authenticateRoutes };
