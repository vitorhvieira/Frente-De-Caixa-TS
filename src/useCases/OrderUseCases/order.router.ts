import { Router } from "express";
import { createOrderController } from "./CreateOrder";
import { detailOrderController } from "./DetailOrder";
import { validationRequest } from "../../middleware/zodValidation";
import { CreateOrderSchema } from "./CreateOrder/CreateOderSchemas";
import { DetailOrderSchema } from "./DetailOrder/DetailOrderSchema";

const orderRouter = Router();
orderRouter.post(
  "/pedido",
  validationRequest(CreateOrderSchema),
  (request, response) => {
    return createOrderController.handle(request, response);
  }
);
orderRouter.get(
  "/pedido/:id?",
  validationRequest(DetailOrderSchema),
  (request, response) => {
    return detailOrderController.handle(request, response);
  }
);

export { orderRouter };
