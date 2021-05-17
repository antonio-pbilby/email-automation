import { Router } from "express";

import { createUserController } from "./UseCase/createUser";
import { findByEmailController } from "./UseCase/findByEmail";
import { listUsersController } from "./UseCase/listUsers";
import { updateUserController } from "./UseCase/updateUser";

const route = Router();

route.post("/user", (req, res) => {
  return createUserController.handle(req, res);
});

route.get("/user", (req, res) => {
  return findByEmailController.handle(req, res);
});

route.get("/users", (req, res) => {
  return listUsersController.handle(req, res);
});

route.put("/user/:id", (req, res) => {
  return updateUserController.handle(req, res);
});

export { route };
