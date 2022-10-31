/* eslint-disable no-console */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { IUserRepository } from '@modules/user/repositories/IUserRepository';
import { ICreateUserDTO } from '@modules/user/repositories/UserDTO';
import { User } from '@prisma/client';
import { AppError } from 'errors/AppError';
import { inject, injectable } from 'tsyringe';

@injectable()
export class CreateUserUseCase {
  constructor(
    @inject('UsersRepository')
    private userRepository: IUserRepository,
  ) {}

  public async execute({
    githubUrl,
    linkedinUrl,
    name,
  }: ICreateUserDTO): Promise<User> {
    if (!githubUrl || !linkedinUrl || !name) {
      throw new AppError('Missing data to create the qrcode', 403);
    }

    const user = await this.userRepository.create({
      githubUrl,
      linkedinUrl,
      name,
    });

    return user;
  }
}
