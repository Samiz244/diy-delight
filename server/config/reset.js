import "dotenv/config";
import pool from "./database.js";

// Drops and recreates the custom_pizzas table.
// Run with: npm run reset
// Not used during normal application requests.

async function reset() {
  await pool.query(`
    DROP TABLE IF EXISTS custom_pizzas;

    CREATE TABLE custom_pizzas (
      id         SERIAL PRIMARY KEY,
      name       TEXT NOT NULL,
      size       TEXT NOT NULL CHECK (size IN ('small', 'medium', 'large')),
      crust      TEXT NOT NULL CHECK (crust IN ('thin', 'classic', 'stuffed')),
      sauce      TEXT NOT NULL CHECK (sauce IN ('tomato', 'alfredo', 'bbq')),
      cheese     TEXT NOT NULL CHECK (cheese IN ('mozzarella', 'cheddar', 'vegan')),
      topping    TEXT NOT NULL CHECK (topping IN ('pepperoni', 'mushroom', 'olive')),
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    );
  `);

  console.log("Database reset complete.");
  await pool.end();
}

reset();
