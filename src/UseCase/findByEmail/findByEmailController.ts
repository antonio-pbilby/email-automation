import { Request, Response } from "express";

import { UsersRepository } from "../../repositories/usersRepository";

class FindByEmailController {
  constructor(private usersRepository: UsersRepository) {}

  async handle(req: Request, res: Response): Promise<Response> {
    const { email } = req.query;

    if (typeof email === "string") {
      const user = await this.usersRepository.findByEmail(email);

      if (user) return res.json(user);
      return res.status(404).json({ error: "User not found!" });
    }

    return res.status(400).json({ error: "Invalid type" });
  }
}

export { FindByEmailController };
