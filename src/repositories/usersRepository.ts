import { CreateQuery } from "mongoose";

import User, { IUser } from "../models/User.model";

// interface IUpdateUser {
//   id: string;
//   user: IUser;
// }
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

  async list(): Promise<IUser[]> {
    const users: IUser[] = await User.find();

    return users;
  }

  // async update({id, user}: IUpdateUser): Promise<IUser> {
  //   const userUpdt = await User.updateOne({_id: id}, {user});

  //   return userUpdt;
  // }
}

export { UsersRepository };
