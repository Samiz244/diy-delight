import { Router } from "express";
import {
  getPizzas,
  getPizzaById,
  createPizza,
  updatePizza,
  deletePizza,
} from "../controllers/pizzas.js";

const router = Router();

router.get("/", getPizzas);
router.get("/:id", getPizzaById);
router.post("/", createPizza);
router.put("/:id", updatePizza);
router.delete("/:id", deletePizza);

export default router;
