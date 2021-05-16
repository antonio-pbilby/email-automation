import { Router } from "express";

import { createUserController } from "./UseCase/createUser";

const route = Router();

route.post("/user", async (req, res) => {
  return createUserController.handle(req, res);
});

route.get("/user", (req, res) => {
  return res.json({ msg: "msg" });
});

export { route };
