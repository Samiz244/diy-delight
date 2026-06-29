import "./PizzaPreview.css";

export default function PizzaPreview({ pizza = {}, variant = "large" }) {
  const { size, crust, sauce, cheese, topping } = pizza;

  const toppingPieces = topping
    ? Array.from({ length: 6 }, (_, i) => (
        <div key={i} className="topping-piece" />
      ))
    : null;

  return (
    <div
      className={[
        "pizza-preview",
        `pizza-preview--${variant}`,
        size && `pizza-size--${size}`,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      <div className={`pizza-dough pizza-crust--${crust || "classic"}`}>
        <div
          className={[
            "pizza-sauce-layer",
            sauce && `pizza-sauce--${sauce}`,
          ]
            .filter(Boolean)
            .join(" ")}
        >
          <div
            className={[
              "pizza-cheese-layer",
              cheese && `pizza-cheese--${cheese}`,
            ]
              .filter(Boolean)
              .join(" ")}
          >
            <div
              className={[
                "pizza-toppings-layer",
                topping && `pizza-topping--${topping}`,
              ]
                .filter(Boolean)
                .join(" ")}
            >
              {toppingPieces}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
