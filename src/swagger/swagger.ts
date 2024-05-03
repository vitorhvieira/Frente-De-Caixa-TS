import { Router } from "express";
import swaggerUi from "swagger-ui-express";
import swaggerDoc from "../../swaggerDocument.json";

const swaggerRouter = Router();
swaggerRouter.get("/", swaggerUi.setup(swaggerDoc));
swaggerRouter.use(swaggerUi.serve);

export { swaggerRouter };
