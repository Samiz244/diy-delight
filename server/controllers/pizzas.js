import pool from "../config/database.js";

function isInvalidCombo(size, crust) {
  return size === "small" && crust === "stuffed";
}

export async function getPizzas(req, res) {
  try {
    const result = await pool.query(
      "SELECT * FROM custom_pizzas ORDER BY created_at DESC"
    );
    res.json(result.rows);
  } catch (err) {
    res.status(500).json({ error: "Failed to retrieve pizzas." });
  }
}

export async function getPizzaById(req, res) {
  const { id } = req.params;
  try {
    const result = await pool.query(
      "SELECT * FROM custom_pizzas WHERE id = $1",
      [id]
    );
    if (result.rows.length === 0) {
      return res.status(404).json({ error: "Pizza not found." });
    }
    res.json(result.rows[0]);
  } catch (err) {
    res.status(500).json({ error: "Failed to retrieve pizza." });
  }
}

export async function createPizza(req, res) {
  const { name, size, crust, sauce, cheese, topping } = req.body;

  if (isInvalidCombo(size, crust)) {
    return res.status(400).json({
      error: "Stuffed crust is only available for Medium and Large pizzas.",
    });
  }

  try {
    const result = await pool.query(
      `INSERT INTO custom_pizzas (name, size, crust, sauce, cheese, topping)
       VALUES ($1, $2, $3, $4, $5, $6)
       RETURNING *`,
      [name, size, crust, sauce, cheese, topping]
    );
    res.status(201).json(result.rows[0]);
  } catch (err) {
    res.status(500).json({ error: "Failed to save pizza." });
  }
}

export async function updatePizza(req, res) {
  const { id } = req.params;
  const { name, size, crust, sauce, cheese, topping } = req.body;

  if (isInvalidCombo(size, crust)) {
    return res.status(400).json({
      error: "Stuffed crust is only available for Medium and Large pizzas.",
    });
  }

  try {
    const result = await pool.query(
      `UPDATE custom_pizzas
       SET name = $1, size = $2, crust = $3, sauce = $4, cheese = $5, topping = $6
       WHERE id = $7
       RETURNING *`,
      [name, size, crust, sauce, cheese, topping, id]
    );
    if (result.rows.length === 0) {
      return res.status(404).json({ error: "Pizza not found." });
    }
    res.json(result.rows[0]);
  } catch (err) {
    res.status(500).json({ error: "Failed to update pizza." });
  }
}

export async function deletePizza(req, res) {
  const { id } = req.params;
  try {
    const result = await pool.query(
      "DELETE FROM custom_pizzas WHERE id = $1 RETURNING id",
      [id]
    );
    if (result.rows.length === 0) {
      return res.status(404).json({ error: "Pizza not found." });
    }
    res.status(204).send();
  } catch (err) {
    res.status(500).json({ error: "Failed to delete pizza." });
  }
}
