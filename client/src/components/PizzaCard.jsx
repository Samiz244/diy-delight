import "./PizzaCard.css";
import PizzaPreview from "./PizzaPreview";
import { calculatePrice } from "../utilities/calculatePrice";

// Stored values are lowercase; display them with a capital first letter.
// "bbq" is a known exception that needs all-caps.
function display(value) {
  if (!value) return "—";
  if (value === "bbq") return "BBQ";
  return value.charAt(0).toUpperCase() + value.slice(1);
}

export default function PizzaCard({ pizza, onView, onEdit, onDelete }) {
  const price = calculatePrice(pizza);

  return (
    <div className="pizza-card">
      <PizzaPreview pizza={pizza} variant="small" />

      <div className="pizza-card-body">
        <h3 className="pizza-card-name">{pizza.name}</h3>

        <ul className="pizza-card-config">
          <li>{display(pizza.size)}</li>
          <li>{display(pizza.crust)} Crust</li>
          <li>{display(pizza.sauce)} Sauce</li>
          <li>{display(pizza.cheese)} Cheese</li>
          <li>{display(pizza.topping)}</li>
        </ul>

        <p className="pizza-card-price">${price.toFixed(2)}</p>
      </div>

      <div className="pizza-card-actions">
        <button onClick={onView} className="pizza-card-btn">View</button>
        <button onClick={() => onEdit(pizza)} className="pizza-card-btn">Edit</button>
        <button onClick={() => onDelete(pizza.id)} className="pizza-card-btn pizza-card-btn--delete">Delete</button>
      </div>
    </div>
  );
}
