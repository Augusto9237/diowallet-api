import { Router } from "express";
import transactionController from "../controllers/transactionController.js";
import { authMiddleware } from "../middlewares/authMiddleware.js";
import { validationSchemaMiddleware } from "../middlewares/validationSchemaMiddleware.js";
import { CreateTransaction } from "../schemas/validation/CreateTransaction.js";

const transactionRouter = Router();

transactionRouter.use(authMiddleware);

transactionRouter.post(
  "/transactions",
  validationSchemaMiddleware(CreateTransaction),
  transactionController.create
);

transactionRouter.patch(
  "/transactions/:id",
  validationSchemaMiddleware(CreateTransaction),
  transactionController.update
);

transactionRouter.delete("/transactions/:id", 
transactionController.deletedTransaction
);

transactionRouter.get("/transactions", transactionController.findAllByUser);

export default transactionRouter;
