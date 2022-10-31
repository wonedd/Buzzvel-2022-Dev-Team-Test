import { IAccountsRepository } from '@modules/account/repositories/IAccountsRepository';
import { container } from 'tsyringe';
import { AccountsRepository } from '../repositories/implementations/AccountsRepository';

container.registerSingleton<IAccountsRepository>(
  'AccountsRepository',
  AccountsRepository,
);
