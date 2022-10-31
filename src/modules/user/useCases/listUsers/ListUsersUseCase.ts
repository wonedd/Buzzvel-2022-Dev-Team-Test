import { IUserRepository } from '@modules/user/repositories/IUserRepository';
import { User } from '@prisma/client';
import { inject, injectable } from 'tsyringe';

@injectable()
class ListUsersUseCase {
  constructor(
    @inject('UsersRepository')
    private userRepository: IUserRepository,
  ) {}

  async execute(): Promise<User[]> {
    const users = await this.userRepository.list();

    return users;
  }
}

export { ListUsersUseCase };
