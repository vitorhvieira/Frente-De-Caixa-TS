import "express-async-errors";
import express from "express";
import { router } from "./routes";
import { handleError } from "./middleware/handleError";

require("dotenv").config();

const app = express();

app.use(express.json());
app.use(router);
app.use(handleError);

export { app };
