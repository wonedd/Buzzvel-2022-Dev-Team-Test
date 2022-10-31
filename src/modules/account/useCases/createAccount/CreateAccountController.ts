import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { CreateAccountUseCase } from './CreateAccountUseCase';

export class CreateAccountController {
  public async handle(request: Request, response: Response): Promise<Response> {
    const { email, password } = request.body;

    const createAccountUC = container.resolve(CreateAccountUseCase);

    const account = await createAccountUC.execute({
      email,
      password,
    });

    return response.status(201).json(account);
  }
}
