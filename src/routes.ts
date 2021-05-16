import { Router } from "express";

import { createUserController } from "./UseCase/createUser";
import { findByEmailController } from "./UseCase/findByEmail";
import { listUsersController } from "./UseCase/listUsers";

const route = Router();

route.post("/user", async (req, res) => {
  return createUserController.handle(req, res);
});

route.get("/user", (req, res) => {
  return findByEmailController.handle(req, res);
});

route.get("/users", (req, res) => {
  return listUsersController.handle(req, res);
});

export { route };
