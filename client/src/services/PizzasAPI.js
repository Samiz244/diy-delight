const BASE_URL = "/api/pizzas";

export async function getPizzas() {
  const response = await fetch(BASE_URL);
  if (!response.ok) {
    throw new Error("Failed to fetch pizzas.");
  }
  return response.json();
}

export async function getPizza(id) {
  const response = await fetch(`${BASE_URL}/${id}`);
  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.error || "Failed to fetch pizza.");
  }
  return response.json();
}

export async function createPizza(pizza) {
  const response = await fetch(BASE_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(pizza),
  });
  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.error || "Failed to save pizza.");
  }
  return response.json();
}

export async function updatePizza(id, pizza) {
  const response = await fetch(`${BASE_URL}/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(pizza),
  });
  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.error || "Failed to update pizza.");
  }
  return response.json();
}

export async function deletePizza(id) {
  const response = await fetch(`${BASE_URL}/${id}`, {
    method: "DELETE",
  });
  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.error || "Failed to delete pizza.");
  }
}
