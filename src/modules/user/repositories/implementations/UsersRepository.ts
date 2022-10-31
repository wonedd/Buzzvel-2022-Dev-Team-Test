import { User } from '@prisma/client';
import { prisma } from '@shared/infra/prisma';
import { IUserRepository } from '../IUserRepository';
import { ICreateUserDTO } from '../UserDTO';

class UsersRepository implements IUserRepository {
  private ormRepository = prisma.user;

  async create({
    githubUrl,
    linkedinUrl,
    name,
  }: ICreateUserDTO): Promise<User> {
    const user = await this.ormRepository.create({
      data: {
        githubUrl,
        linkedinUrl,
        name,
      },
    });

    return user;
  }

  async list(): Promise<User[]> {
    const users = await this.ormRepository.findMany();

    return users;
  }
}

export { UsersRepository };
