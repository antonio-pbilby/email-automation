import { UsersRepository } from "../../repositories/usersRepository";
import { CreateUserController } from "./createUserController";

const usersRepository = new UsersRepository();
const createUserController = new CreateUserController(usersRepository);
export { createUserController };
