import { Router } from "express";
import { upload } from "../../configs/multer";
import { createProductController } from "./CreateProduct";
import { updateProductController } from "./UpdateProduct";
import { deleteProductController } from "./DeleteProduct";
import { detailProductController } from "./DetailProduct";
import { validationRequest } from "../../middleware/zodValidation";
import { CreateProductSchema } from "./CreateProduct/CreateProductSchema";
import { UpdateProductSchema } from "./UpdateProduct/UpdateProductSchema";
import { DetailProductSchema } from "./DetailProduct/DetailProductSchema";
import { DeleteProductSchema } from "./DeleteProduct/DeleteProductSchema";

const productRouter = Router();

productRouter.post(
  "/produto",
  upload.single("produto_img"),
  validationRequest(CreateProductSchema),
  (request, response) => {
    return createProductController.handle(request, response);
  }
);
productRouter.put(
  "/produto/:id",
  upload.single("produto_img"),
  validationRequest(UpdateProductSchema),
  (request, response) => {
    return updateProductController.handle(request, response);
  }
);
productRouter.get(
  "/produto/:id?",
  validationRequest(DetailProductSchema),
  (request, response) => {
    return detailProductController.handle(request, response);
  }
);

productRouter.delete(
  "/produto/:id",
  validationRequest(DeleteProductSchema),
  (request, response) => {
    return deleteProductController.handle(request, response);
  }
);

export { productRouter };
