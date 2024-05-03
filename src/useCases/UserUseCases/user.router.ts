import { Router } from "express";
import { authenticate } from "../../middleware/authenticate";
import { updateUserController } from "./UpdateUser";
import { detailUserController } from "./DetailUser";
import { validationRequest } from "../../middleware/zodValidation";
import { UpdateUserSchema } from "./UpdateUser/UpdateUserSchema";

const userRouter = Router();

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
