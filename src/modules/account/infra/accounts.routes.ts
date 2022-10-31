import { Router } from 'express';
import { CreateAccountController } from '../useCases/createAccount/CreateAccountController';

export const accountsRouter = Router();

const accountController = new CreateAccountController();

accountsRouter.post('/', accountController.handle);
