import { UsersRepository } from "../../repositories/usersRepository";
import { ListUsersController } from "./listUsersController";

const usersRepository = new UsersRepository();
const listUsersController = new ListUsersController(usersRepository);
export { listUsersController };
