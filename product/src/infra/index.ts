import { Router } from "express";
import { productRoute } from "./routes/productRoute";



export const routes = Router();

routes.use(productRoute);