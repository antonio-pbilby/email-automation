import { Request, Response } from "express";

import { UsersRepository } from "../../repositories/usersRepository";

class UpdateUserController {
  constructor(private usersRepository: UsersRepository) {}

  async handle(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;
    const { first_name, last_name, email } = req.body;

    const user = await this.usersRepository.findById(id);

    user.first_name = first_name || user.first_name;
    user.last_name = last_name || user.last_name;
    user.email = email || user.email;

    const updatedUser = await this.usersRepository.update(user);

    return res.status(200).json(updatedUser);
  }
}

export { UpdateUserController };
