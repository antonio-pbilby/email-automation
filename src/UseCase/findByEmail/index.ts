import { UsersRepository } from "../../repositories/usersRepository";
import { FindByEmailController } from "./findByEmailController";

const usersRepository = new UsersRepository();
const findByEmailController = new FindByEmailController(usersRepository);

export { findByEmailController };
