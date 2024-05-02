import { Router } from "express";
import { userRouter } from "./useCases/UserUseCases/user.router";
import { productRouter } from "./useCases/ProductUseCases/product.router";
import { categoryRouter } from "./useCases/CategoryUseCases/category.router";
import { orderRouter } from "./useCases/OrderUseCases/order.router";
import { clientRouter } from "./useCases/ClientUseCases/client.router";
import { authenticate } from "./middleware/authenticate";

const router = Router();

router.use(userRouter);
router.use(authenticate)
router.use(productRouter);
router.use(categoryRouter);
router.use(orderRouter);
router.use(clientRouter);

export { router };
