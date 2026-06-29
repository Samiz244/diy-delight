import { useEffect, useState } from "react";
import "./StepSelector.css";

const STEP_OPTIONS = {
  size:    ["small",     "medium",    "large"  ],
  crust:   ["thin",      "classic",   "stuffed"],
  sauce:   ["tomato",    "alfredo",   "bbq"    ],
  cheese:  ["mozzarella","cheddar",   "vegan"  ],
  topping: ["pepperoni", "mushroom",  "olive"  ],
};

const LABELS = {
  size:    { small: "Small",      medium: "Medium",   large: "Large"    },
  crust:   { thin: "Thin",        classic: "Classic", stuffed: "Stuffed"},
  sauce:   { tomato: "Tomato",    alfredo: "Alfredo", bbq: "BBQ"        },
  cheese:  { mozzarella: "Mozzarella", cheddar: "Cheddar", vegan: "Vegan" },
  topping: { pepperoni: "Pepperoni", mushroom: "Mushroom", olive: "Olive" },
};

const STEP_LABELS = {
  name: "Name", size: "Size", crust: "Crust",
  sauce: "Sauce", cheese: "Cheese", topping: "Topping",
};

export default function StepSelector({
  steps,
  step,
  currentStepIndex,
  highestUnlockedStepIndex,
  pizza,
  onSelect,
  onStepChange,
  validationMessage,
}) {
  const [nameInput, setNameInput] = useState(pizza.name || "");

  useEffect(() => {
    setNameInput(pizza.name || "");
  }, [pizza.name]);

  function handleNameSubmit() {
    const trimmed = nameInput.trim();
    if (trimmed) onSelect(trimmed);
  }

  function handleNameKeyDown(e) {
    if (e.key === "Enter") handleNameSubmit();
  }

  return (
    <div className="step-selector">
      <nav className="step-nav">
        {steps.map((s, i) => {
          const isActive = i === currentStepIndex;
          const isUnlocked = i <= highestUnlockedStepIndex;
          const isDone = pizza[s] !== "" && i !== currentStepIndex;

          return (
            <button
              key={s}
              onClick={() => onStepChange(i)}
              disabled={!isUnlocked}
              className={[
                "step-nav-btn",
                isActive   ? "step-nav-btn--active"   : "",
                isDone     ? "step-nav-btn--done"     : "",
                !isUnlocked? "step-nav-btn--locked"   : "",
              ]
                .filter(Boolean)
                .join(" ")}
            >
              {STEP_LABELS[s]}
            </button>
          );
        })}
      </nav>

      <div className="step-content">
        {step === "name" ? (
          <div className="step-name-input">
            <input
              type="text"
              value={nameInput}
              onChange={(e) => setNameInput(e.target.value)}
              onKeyDown={handleNameKeyDown}
              placeholder="Name your pizza..."
              className="step-name-field"
            />
            <button
              onClick={handleNameSubmit}
              disabled={!nameInput.trim()}
              className="step-name-submit"
            >
              Next
            </button>
          </div>
        ) : (
          <div className="step-options">
            {STEP_OPTIONS[step]?.map((value) => (
              <button
                key={value}
                onClick={() => onSelect(value)}
                className={[
                  "step-option-btn",
                  pizza[step] === value ? "step-option-btn--selected" : "",
                ]
                  .filter(Boolean)
                  .join(" ")}
              >
                {LABELS[step][value]}
              </button>
            ))}
          </div>
        )}

        {validationMessage && (
          <p className="step-validation-message">{validationMessage}</p>
        )}
      </div>
    </div>
  );
}
