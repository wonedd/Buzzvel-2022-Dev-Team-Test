/* eslint-disable no-console */
/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  IAccountsRepository,
  ICreateAccountDTO,
} from '@modules/account/repositories/IAccountsRepository';
import { Account } from '@prisma/client';
import { inject, injectable } from 'tsyringe';

@injectable()
export class CreateAccountUseCase {
  constructor(
    @inject('AccountsRepository')
    private accountRepository: IAccountsRepository,
  ) {}

  public async execute({
    email,
    password,
  }: ICreateAccountDTO): Promise<Account> {
    if (!email || !password) {
      console.log('Missing data to create an account', 403);
    }

    const account = await this.accountRepository.create({
      email,
      password,
    });

    return account;
  }
}
