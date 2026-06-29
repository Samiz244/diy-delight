// Frontend validation rules applied immediately so the user gets feedback before proceeding.

export function validatePizza(pizza) {
  if (pizza.size === "small" && pizza.crust === "stuffed") {
    return {
      isValid: false,
      message: "Stuffed crust is only available for Medium and Large pizzas.",
    };
  }

  return { isValid: true, message: "" };
}
