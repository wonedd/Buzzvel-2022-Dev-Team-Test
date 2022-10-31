import { Account } from '@prisma/client';
import { prisma } from '@shared/infra/prisma';
import { IAccountsRepository, ICreateAccountDTO } from '../IAccountsRepository';

class AccountsRepository implements IAccountsRepository {
  private ormRepository = prisma.account;

  async create({ email, password }: ICreateAccountDTO): Promise<Account> {
    const account = await this.ormRepository.create({
      data: {
        email,
        password,
      },
    });

    return account;
  }
}

export { AccountsRepository };
