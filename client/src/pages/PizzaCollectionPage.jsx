import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./PizzaCollectionPage.css";
import { getPizzas, deletePizza, updatePizza } from "../services/PizzasAPI";
import PizzaCard from "../components/PizzaCard";
import EditDrawer from "../components/EditDrawer";

export default function PizzaCollectionPage() {
  const navigate = useNavigate();
  const [pizzas, setPizzas] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [deleteError, setDeleteError] = useState("");
  const [selectedPizza, setSelectedPizza] = useState(null);
  const [updateError, setUpdateError] = useState("");

  useEffect(() => {
    getPizzas()
      .then((data) => setPizzas(data))
      .catch(() => setError("Could not load your pizzas. Please try again."))
      .finally(() => setLoading(false));
  }, []);

  function handleEdit(pizza) {
    setUpdateError("");
    setSelectedPizza(pizza);
  }

  function handleCloseDrawer() {
    setSelectedPizza(null);
    setUpdateError("");
  }

  async function handleUpdate(id, draftPizza) {
    setUpdateError("");
    try {
      const updated = await updatePizza(id, draftPizza);
      setPizzas((prev) => prev.map((p) => (p.id === id ? updated : p)));
      setSelectedPizza(null);
    } catch (err) {
      setUpdateError(err.message || "Could not update pizza. Please try again.");
    }
  }

  async function handleDelete(id) {
    setDeleteError("");
    try {
      await deletePizza(id);
      setPizzas((prev) => prev.filter((p) => p.id !== id));
    } catch (err) {
      setDeleteError(err.message || "Could not delete pizza. Please try again.");
    }
  }

  if (loading) {
    return <p className="collection-status">Loading your pizzas…</p>;
  }

  if (error) {
    return <p className="collection-status collection-status--error">{error}</p>;
  }

  return (
    <div className="collection-page">
      <div className="collection-header">
        <h1 className="collection-title">Your Pizza Collection</h1>
        <Link to="/" className="collection-build-link">Build a Pizza</Link>
      </div>

      {deleteError && (
        <p className="collection-delete-error">{deleteError}</p>
      )}

      {pizzas.length === 0 ? (
        <div className="collection-empty">
          <p>No pizzas yet.</p>
          <Link to="/" className="collection-build-link">Build your first one!</Link>
        </div>
      ) : (
        <div className="pizza-grid">
          {pizzas.map((pizza) => (
            <PizzaCard
              key={pizza.id}
              pizza={pizza}
              onView={() => navigate(`/pizzas/${pizza.id}`)}
              onEdit={handleEdit}
              onDelete={handleDelete}
            />
          ))}
        </div>
      )}

      {selectedPizza && (
        <EditDrawer
          pizza={selectedPizza}
          onSave={handleUpdate}
          onCancel={handleCloseDrawer}
          saveError={updateError}
        />
      )}
    </div>
  );
}
