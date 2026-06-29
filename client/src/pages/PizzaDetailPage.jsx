import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import "./PizzaDetailPage.css";
import { getPizza } from "../services/PizzasAPI";
import { calculatePrice } from "../utilities/calculatePrice";
import PizzaPreview from "../components/PizzaPreview";

function display(value) {
  if (!value) return "—";
  if (value === "bbq") return "BBQ";
  return value.charAt(0).toUpperCase() + value.slice(1);
}

function formatDate(iso) {
  if (!iso) return null;
  return new Date(iso).toLocaleDateString(undefined, {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default function PizzaDetailPage() {
  const { id } = useParams();
  const [pizza, setPizza] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    getPizza(id)
      .then((data) => setPizza(data))
      .catch((err) => {
        if (err.message === "Pizza not found.") {
          setNotFound(true);
        } else {
          setError("Could not load this pizza. Please try again.");
        }
      })
      .finally(() => setLoading(false));
  }, [id]);

  if (loading) {
    return <p className="detail-status">Loading pizza…</p>;
  }

  if (notFound) {
    return (
      <div className="detail-status">
        <p>Pizza not found.</p>
        <Link to="/pizzas" className="detail-back-link">Back to Collection</Link>
      </div>
    );
  }

  if (error) {
    return <p className="detail-status detail-status--error">{error}</p>;
  }

  const price = calculatePrice(pizza);
  const createdAt = formatDate(pizza.created_at);

  return (
    <div className="detail-page">
      <Link to="/pizzas" className="detail-back-link">← Back to Collection</Link>

      <div className="detail-content">
        <PizzaPreview pizza={pizza} variant="large" />

        <div className="detail-info">
          <h1 className="detail-name">{pizza.name}</h1>

          <ul className="detail-config">
            <li><span className="detail-label">Size</span>{display(pizza.size)}</li>
            <li><span className="detail-label">Crust</span>{display(pizza.crust)}</li>
            <li><span className="detail-label">Sauce</span>{display(pizza.sauce)}</li>
            <li><span className="detail-label">Cheese</span>{display(pizza.cheese)}</li>
            <li><span className="detail-label">Topping</span>{display(pizza.topping)}</li>
          </ul>

          <p className="detail-price">${price.toFixed(2)}</p>

          {createdAt && (
            <p className="detail-created">Created {createdAt}</p>
          )}
        </div>
      </div>
    </div>
  );
}
