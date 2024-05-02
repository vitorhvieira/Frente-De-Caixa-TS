import { Router } from "express";
import { createClientController } from "./CreateClient";
import { deleteClientController } from "./DeleteClient";
import { detailClientController } from "./DetailClient";
import { updateClientController } from "./UpdateClient";
import { validationRequest } from "../../middleware/zodValidation";
import { CreateClientSchema } from "./CreateClient/CreateClientSchema";
import { UpdateClientSchema } from "./UpdateClient/UpdateClientSchema";
import { DetailClientSchema } from "./DetailClient/DetailClientSchema";
import { DeleteClientSchema } from "./DeleteClient/DeleteClientSchema";

const clientRouter = Router();

clientRouter.post(
  "/cliente",
  validationRequest(CreateClientSchema),
  (request, response) => {
    return createClientController.handle(request, response);
  }
);
clientRouter.put(
  "/cliente/:id",
  validationRequest(UpdateClientSchema),
  (request, response) => {
    return updateClientController.handle(request, response);
  }
);
clientRouter.get(
  "/cliente/:id?",
  validationRequest(DetailClientSchema),
  (request, response) => {
    return detailClientController.handle(request, response);
  }
);
clientRouter.delete(
  "/cliente/:id",
  validationRequest(DeleteClientSchema),
  (request, response) => {
    return deleteClientController.handle(request, response);
  }
);

export { clientRouter };
