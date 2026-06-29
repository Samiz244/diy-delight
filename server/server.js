import "dotenv/config";
import express from "express";
import cors from "cors";
import pizzaRoutes from "./routes/pizzas.js";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.use("/api/pizzas", pizzaRoutes);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
