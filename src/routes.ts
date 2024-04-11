import { Router, request, response } from "express";
import { createUserController } from "./useCases/UserUseCases/CreateUser";
import { authenticateUserController } from "./useCases/UserUseCases/authenticateUser";
import { authenticate } from "./middleware/authenticate";
import { detailUserController } from "./useCases/UserUseCases/DetailUser";
import { updateUserController } from "./useCases/UserUseCases/UpdateUser";
import { createCategoryUseCaseController } from "./useCases/CategoryUseCases/CreateCategory";
import { detailCategoryController } from "./useCases/CategoryUseCases/DetailCategory";
import { updateCategoryController } from "./useCases/CategoryUseCases/UpdateCategory";
import { deleteCategoryController } from "./useCases/CategoryUseCases/DeleteCategory";
import { createProductController } from "./useCases/ProductUseCases/CreateProduct";
import { updateProductController } from "./useCases/ProductUseCases/UpdateProduct";
import { detailProductController } from "./useCases/ProductUseCases/DetailProduct";
import { deleteProductController } from "./useCases/ProductUseCases/DeleteProduct";
import { createClientController } from "./useCases/ClientUseCases/CreateClient";
import { updateClientController } from "./useCases/ClientUseCases/UpdateClient";
import { detailClientController } from "./useCases/ClientUseCases/DetailClient";
import { deleteClientController } from "./useCases/ClientUseCases/DeleteClient";
import { createOrderController } from "./useCases/OrderUseCases/CreateOrder";
import { detailOrderController } from "./useCases/OrderUseCases/DetailOrder";

const router = Router();

router.post("/usuario", (request, response) => {
  return createUserController.handle(request, response);
});

router.get("/login", (request, response) => {
  return authenticateUserController.handle(request, response);
});
router.use(authenticate);
router.post("/categoria", (request, response) => {
  return createCategoryUseCaseController.handle(request, response);
});
router.put("/usuario", (request, response) => {
  return updateUserController.handle(request, response);
});
router.get("/usuario", (request, response) => {
  return detailUserController.handle(request, response);
});
router.get("/categoria/:id?", (request, response) => {
  return detailCategoryController.handle(request, response);
});

router.put("/categoria/:id", (request, response) => {
  return updateCategoryController.handle(request, response);
});
router.delete("/categoria/:id", (request, response) => {
  return deleteCategoryController.handle(request, response);
});
router.post("/produto", (request, response) => {
  return createProductController.handle(request, response);
});
router.put("/produto/:id", (request, response) => {
  return updateProductController.handle(request, response);
});
router.get("/produto/:id?", (request, response) => {
  return detailProductController.handle(request, response);
});

router.delete("/produto/:id", (request, response) => {
  return deleteProductController.handle(request, response);
});
router.post("/cliente", (request, response) => {
  return createClientController.handle(request, response);
});
router.put("/cliente/:id", (request, response) => {
  return updateClientController.handle(request, response);
});
router.get("/cliente/:id?", (request, response) => {
  return detailClientController.handle(request, response);
});
router.delete("/cliente/:id", (request, response) => {
  return deleteClientController.handle(request, response);
});
router.post("/pedido", (request, response) => {
  return createOrderController.handle(request, response);
});
router.get("/pedido/:id?", (request, response) => {
  return detailOrderController.handle(request, response);
});

export { router };
