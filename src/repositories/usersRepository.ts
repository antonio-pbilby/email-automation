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

  async findByEmail(email: string): Promise<IUser> {
    const user: IUser = await User.findOne({ email });

    return user;
  }

  async findById(id: string): Promise<IUser> {
    const user: IUser = await User.findOne({ _id: id });

    return user;
  }

  async list(): Promise<IUser[]> {
    const users: IUser[] = await User.find();

    return users;
  }

  update(user: IUser): Promise<IUser> {
    return user.save();
  }
}

export { UsersRepository };
