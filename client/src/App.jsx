import { Routes, Route } from "react-router-dom";
import PizzaBuilderPage from "./pages/PizzaBuilderPage";
import PizzaCollectionPage from "./pages/PizzaCollectionPage";
import PizzaDetailPage from "./pages/PizzaDetailPage";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<PizzaBuilderPage />} />
      <Route path="/pizzas" element={<PizzaCollectionPage />} />
      <Route path="/pizzas/:id" element={<PizzaDetailPage />} />
    </Routes>
  );
}
