import cors from "cors";
import "express-async-errors";
import express from "express";
import { router } from "./routes";
import { handleError } from "./middleware/handleError";
import "dotenv/config";


class AppConfig {
  public express: express.Application;
  constructor() {
    this.express = express();
    this.middlewares();
    this.routes();
  }

  private middlewares(): void {
    this.express.use(express.json());
    this.express.use(cors());
  }
  private routes(): void {
    
    this.express.use(router);
    this.express.use(handleError);
    
  }
}

export const app = new AppConfig().express;
