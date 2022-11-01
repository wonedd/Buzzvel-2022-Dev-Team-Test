import { User } from '@prisma/client';
import { ICreateUserDTO } from './UserDTO';

interface IUserRepository {
  create({ name, linkedinUrl, githubUrl }: ICreateUserDTO): Promise<User>;
  list(): Promise<User[]>;
  findById(id: string): Promise<User | undefined>;
  findByGithubUrl(githubUrl: string): Promise<User | undefined>;
}

export { IUserRepository };
