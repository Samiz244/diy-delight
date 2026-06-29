import "./PriceDisplay.css";

export default function PriceDisplay({ price }) {
  return (
    <div className="price-display">
      <span className="price-label">Total</span>
      <span className="price-amount">${price.toFixed(2)}</span>
    </div>
  );
}
