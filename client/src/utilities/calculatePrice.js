// Pricing rules for each customization option.
// Price is never stored in the backend — always derived here from current rules.

const PRICES = {
  size:    { small: 8,  medium: 10, large: 12 },
  crust:   { thin: 0,  classic: 1, stuffed: 2 },
  sauce:   { tomato: 0, alfredo: 1, bbq: 1     },
  cheese:  { mozzarella: 0, cheddar: 1, vegan: 2 },
  topping: { pepperoni: 2, mushroom: 1, olive: 1  },
};

export function calculatePrice(pizza) {
  let total = 0;
  for (const [field, options] of Object.entries(PRICES)) {
    const selected = pizza[field];
    if (selected && options[selected] !== undefined) {
      total += options[selected];
    }
  }
  return total;
}
