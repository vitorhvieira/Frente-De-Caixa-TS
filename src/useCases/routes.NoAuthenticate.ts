import { Router } from "express";
import { validationRequest } from "../middleware/zodValidation";
import { detailCategoryController } from "./CategoryUseCases/DetailCategory";
import { DetailCategorySchema } from "./CategoryUseCases/DetailCategory/DetailCategorySchema";
import { authenticateUserController } from "./UserUseCases/AuthenticateUser";
import { AuthenticateUserSchema } from "./UserUseCases/AuthenticateUser/AuthenticateUserSchema";
import { createUserController } from "./UserUseCases/CreateUser";
import { CreateUserSchema } from "./UserUseCases/CreateUser/CreateUserSchema";

const noAuthenticate = Router();

noAuthenticate.get(
  "/categoria/:id?",
  validationRequest(DetailCategorySchema),
  (request, response) => {
    return detailCategoryController.handle(request, response);
  }
);

noAuthenticate.post(
  "/usuario",
  validationRequest(CreateUserSchema),
  (request, response) => {
    return createUserController.handle(request, response);
  }
);

noAuthenticate.post(
  "/login",
  validationRequest(AuthenticateUserSchema),
  (request, response) => {
    return authenticateUserController.handle(request, response);
  }
);

export { noAuthenticate };
