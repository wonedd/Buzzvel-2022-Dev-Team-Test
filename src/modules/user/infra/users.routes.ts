import { Router } from 'express';
import { CreateUserController } from '../useCases/createUser/CreateUserController';
import { ListUsersController } from '../useCases/listUsers/ListUsersController';

export const usersRouter = Router();

const createUserController = new CreateUserController();

const listUsersController = new ListUsersController();

usersRouter.post('/', createUserController.handle);

usersRouter.get('/', listUsersController.handle);
