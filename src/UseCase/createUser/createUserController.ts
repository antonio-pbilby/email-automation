import { Request, Response } from "express";

import { UsersRepository } from "../../repositories/usersRepository";

class CreateUserController {
  constructor(private usersRepository: UsersRepository) {}

  async handle(req: Request, res: Response): Promise<Response> {
    const { first_name, last_name, email } = req.body;

    const user = await this.usersRepository
      .findByEmail(email)
      .then((data) => {
        return data;
      })
      .catch((e) => {
        return res.status(400).json({ error: e.message });
      });

    if (user) return res.status(400).json({ error: "User already exists" });

    return this.usersRepository
      .create({
        first_name,
        last_name,
        email,
      })
      .then((data) => {
        return res.status(201).json(data);
      })
      .catch((error) => {
        return res.status(400).json({ error: error.message });
      });
  }
}

export { CreateUserController };
