import { Router } from "express";
import { userRouter } from "./useCases/UserUseCases/user.router";
import { productRouter } from "./useCases/ProductUseCases/product.router";
import { categoryRouter } from "./useCases/CategoryUseCases/category.router";
import { orderRouter } from "./useCases/OrderUseCases/order.router";
import { clientRouter } from "./useCases/ClientUseCases/client.router";
import { authenticate } from "./middleware/authenticate";
import { swaggerRouter } from "./swagger/swagger";
import { noAuthenticate } from "./useCases/routes.NoAuthenticate";

const router = Router();

router.use(swaggerRouter);
router.use(noAuthenticate);
router.use(authenticate);
router.use(categoryRouter);
router.use(userRouter);
router.use(productRouter);
router.use(orderRouter);
router.use(clientRouter);

export { router };
