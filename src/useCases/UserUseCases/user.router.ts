import { Router } from "express";
import { createUserController } from "./CreateUser";
import { authenticateUserController } from "./AuthenticateUser";
import { authenticate } from "../../middleware/authenticate";
import { updateUserController } from "./UpdateUser";
import { detailUserController } from "./DetailUser";
import { validationRequest } from "../../middleware/zodValidation";
import { CreateUserSchema } from "./CreateUser/CreateUserSchema";
import { AuthenticateUserSchema } from "./AuthenticateUser/AuthenticateUserSchema";
import { UpdateUserSchema } from "./UpdateUser/UpdateUserSchema";

const userRouter = Router();

userRouter.post(
  "/usuario",
  validationRequest(CreateUserSchema),
  (request, response) => {
    return createUserController.handle(request, response);
  }
);

userRouter.post(
  "/login",
  validationRequest(AuthenticateUserSchema),
  (request, response) => {
    return authenticateUserController.handle(request, response);
  }
);
userRouter.use(authenticate);
userRouter.put(
  "/usuario",
  validationRequest(UpdateUserSchema),
  (request, response) => {
    return updateUserController.handle(request, response);
  }
);
userRouter.get("/usuario", (request, response) => {
  return detailUserController.handle(request, response);
});

export { userRouter };
