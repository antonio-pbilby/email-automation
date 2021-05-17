import { UsersRepository } from "../../repositories/usersRepository";
import { UpdateUserController } from "./updateUserController";

const usersRepository = new UsersRepository();
const updateUserController = new UpdateUserController(usersRepository);

export { updateUserController };
