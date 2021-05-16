import { CreateQuery } from "mongoose";

import User, { IUser } from "../models/User.model";

class UsersRepository {
  async create({
    first_name,
    last_name,
    email,
  }: CreateQuery<IUser>): Promise<IUser> {
    const user = await User.create({
      first_name,
      last_name,
      email,
    });

    console.log(user);
    return user;
  }

  async findByEmail(email: string): Promise<IUser[]> {
    const user: IUser[] = await User.find({ email });

    return user;
  }
}

export { UsersRepository };
