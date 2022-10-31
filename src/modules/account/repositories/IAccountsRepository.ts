import { Account } from '@prisma/client';

interface ICreateAccountDTO {
  email: string;
  password: string;
}

interface IAccountsRepository {
  create({ email, password }: ICreateAccountDTO): Promise<Account>;
}

export { IAccountsRepository, ICreateAccountDTO };
