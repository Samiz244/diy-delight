import "./CookButton.css";

export default function CookButton({ onCook, disabled }) {
  return (
    <button
      onClick={onCook}
      disabled={disabled}
      className="cook-btn"
    >
      Cook 🍕
    </button>
  );
}
