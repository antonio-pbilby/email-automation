import { Request, Response } from "express";

import { UsersRepository } from "../../repositories/usersRepository";

class ListUsersController {
  constructor(private usersRepository: UsersRepository) {}

  async handle(req: Request, res: Response): Promise<Response> {
    const users = await this.usersRepository.list();

    return res.json(users);
  }
}

export { ListUsersController };
