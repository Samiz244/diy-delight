import { useState } from "react";
import { Link } from "react-router-dom";
import "./PizzaBuilderPage.css";
import { calculatePrice } from "../utilities/calculatePrice";
import { validatePizza } from "../utilities/validatePizza";
import { createPizza } from "../services/PizzasAPI";
import PizzaPreview from "../components/PizzaPreview";
import ProgressTracker from "../components/ProgressTracker";
import PriceDisplay from "../components/PriceDisplay";
import StepSelector from "../components/StepSelector";
import CookButton from "../components/CookButton";

const STEPS = ["name", "size", "crust", "sauce", "cheese", "topping"];

const INITIAL_PIZZA = {
  name: "",
  size: "",
  crust: "",
  sauce: "",
  cheese: "",
  topping: "",
};

export default function PizzaBuilderPage() {
  const [pizza, setPizza] = useState(INITIAL_PIZZA);
  const [currentStepIndex, setCurrentStepIndex] = useState(0);
  const [highestUnlockedStepIndex, setHighestUnlockedStepIndex] = useState(0);
  const [status, setStatus] = useState("building"); // "building" | "cooking" | "success"
  const [saveError, setSaveError] = useState("");

  const isComplete = STEPS.every((field) => pizza[field] !== "");
  const validation = validatePizza(pizza);
  const price = calculatePrice(pizza);

  function handleSelect(value) {
    const field = STEPS[currentStepIndex];
    setPizza((prev) => ({ ...prev, [field]: value }));

    // Advance only when the user fills a step for the first time.
    // Re-editing an old step does not reset progress.
    if (currentStepIndex === highestUnlockedStepIndex && currentStepIndex < STEPS.length - 1) {
      setHighestUnlockedStepIndex(currentStepIndex + 1);
      setCurrentStepIndex(currentStepIndex + 1);
    }
  }

  function handleStepChange(stepIndex) {
    if (stepIndex <= highestUnlockedStepIndex) {
      setCurrentStepIndex(stepIndex);
    }
  }

  async function handleCook() {
    if (!validation.isValid) return;

    setStatus("cooking");
    setSaveError("");

    try {
      // Guarantee the cooking animation shows for at least 1.5 s.
      await Promise.all([
        createPizza(pizza),
        new Promise((resolve) => setTimeout(resolve, 1500)),
      ]);
      setStatus("success");
    } catch (err) {
      setStatus("building");
      setSaveError(err.message || "Something went wrong. Please try again.");
    }
  }

  function handleReset() {
    setPizza(INITIAL_PIZZA);
    setCurrentStepIndex(0);
    setHighestUnlockedStepIndex(0);
    setStatus("building");
    setSaveError("");
  }

  if (status === "cooking") {
    return (
      <div className="cooking-screen">
        <span className="cooking-emoji">🍕</span>
        <p className="cooking-text">Cooking your pizza…</p>
      </div>
    );
  }

  if (status === "success") {
    return (
      <div className="success-screen">
        <span className="success-pizza">🍕</span>
        <h2 className="success-name">{pizza.name}</h2>
        <p className="success-stars">⭐⭐⭐⭐⭐</p>
        <p className="success-headline">Your pizza is ready!</p>
        <p className="success-subtext">
          Successfully added to your Pizza Collection.
        </p>
        <div className="success-actions">
          <button onClick={handleReset} className="success-btn success-btn--primary">
            Make Another Pizza
          </button>
          <Link to="/pizzas" className="success-btn success-btn--secondary">
            View Collection
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="builder-page">
      <div>
        <PizzaPreview pizza={pizza} variant="large" />
      </div>

      <div>
        <ProgressTracker
          currentStepIndex={currentStepIndex}
          highestUnlockedStepIndex={highestUnlockedStepIndex}
          totalSteps={STEPS.length}
        />

        <PriceDisplay price={price} />

        <StepSelector
          steps={STEPS}
          step={STEPS[currentStepIndex]}
          currentStepIndex={currentStepIndex}
          highestUnlockedStepIndex={highestUnlockedStepIndex}
          pizza={pizza}
          onSelect={handleSelect}
          onStepChange={handleStepChange}
          validationMessage={validation.message}
        />

        {isComplete && (
          <>
            <CookButton
              onCook={handleCook}
              disabled={!validation.isValid}
            />
            {saveError && <p className="save-error">{saveError}</p>}
          </>
        )}
      </div>
    </div>
  );
}
