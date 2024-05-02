import { Router } from "express";
import { createCategoryUseCaseController } from "./CreateCategory";
import { deleteCategoryController } from "./DeleteCategory";
import { detailCategoryController } from "./DetailCategory";
import { updateCategoryController } from "./UpdateCategory";
import { validationRequest } from "../../middleware/zodValidation";
import { CreateCategorySchema } from "./CreateCategory/CreateCategorySchema";
import { DetailCategorySchema } from "./DetailCategory/DetailCategorySchema";
import { UpdateCategorySchema } from "./UpdateCategory/UpdateCategorySchema";
import { DeleteCategorySchema } from "./DeleteCategory/DeleteCategorySchema";

const categoryRouter = Router();

categoryRouter.post(
  "/categoria",
  validationRequest(CreateCategorySchema),
  (request, response) => {
    return createCategoryUseCaseController.handle(request, response);
  }
);

categoryRouter.get(
  "/categoria/:id?",
  validationRequest(DetailCategorySchema),
  (request, response) => {
    return detailCategoryController.handle(request, response);
  }
);

categoryRouter.put(
  "/categoria/:id",
  validationRequest(UpdateCategorySchema),
  (request, response) => {
    return updateCategoryController.handle(request, response);
  }
);
categoryRouter.delete(
  "/categoria/:id",
  validationRequest(DeleteCategorySchema),
  (request, response) => {
    return deleteCategoryController.handle(request, response);
  }
);

export { categoryRouter };
