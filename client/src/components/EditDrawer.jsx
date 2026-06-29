import { useEffect, useState } from "react";
import "./EditDrawer.css";
import { validatePizza } from "../utilities/validatePizza";

const OPTIONS = {
  size:    ["small",      "medium",    "large"   ],
  crust:   ["thin",       "classic",   "stuffed" ],
  sauce:   ["tomato",     "alfredo",   "bbq"     ],
  cheese:  ["mozzarella", "cheddar",   "vegan"   ],
  topping: ["pepperoni",  "mushroom",  "olive"   ],
};

const LABELS = {
  size:    { small: "Small",       medium: "Medium",   large: "Large"    },
  crust:   { thin: "Thin",         classic: "Classic", stuffed: "Stuffed"},
  sauce:   { tomato: "Tomato",     alfredo: "Alfredo", bbq: "BBQ"        },
  cheese:  { mozzarella: "Mozzarella", cheddar: "Cheddar", vegan: "Vegan" },
  topping: { pepperoni: "Pepperoni", mushroom: "Mushroom", olive: "Olive" },
};

const FIELD_LABELS = {
  size: "Size", crust: "Crust", sauce: "Sauce", cheese: "Cheese", topping: "Topping",
};

export default function EditDrawer({ pizza, onSave, onCancel, saveError }) {
  const [draft, setDraft] = useState({ ...pizza });

  // Reset draft whenever a different pizza is opened for editing.
  useEffect(() => {
    setDraft({ ...pizza });
  }, [pizza.id]);

  const validation = validatePizza(draft);
  const canSave = validation.isValid && draft.name.trim() !== "";

  function handleFieldChange(field, value) {
    setDraft((prev) => ({ ...prev, [field]: value }));
  }

  function handleSave() {
    if (!canSave) return;
    onSave(pizza.id, draft);
  }

  return (
    <div className="edit-drawer-overlay" onClick={onCancel}>
      <div className="edit-drawer" onClick={(e) => e.stopPropagation()}>

        <header className="edit-drawer-header">
          <h2 className="edit-drawer-title">Edit Pizza</h2>
          <button onClick={onCancel} className="edit-drawer-close">✕</button>
        </header>

        <div className="edit-drawer-body">
          {/* Name */}
          <div className="edit-field">
            <label htmlFor="edit-name" className="edit-field-label">Name</label>
            <input
              id="edit-name"
              type="text"
              value={draft.name}
              onChange={(e) => handleFieldChange("name", e.target.value)}
              className="edit-name-input"
            />
          </div>

          {/* Radio groups for all other fields */}
          {Object.entries(OPTIONS).map(([field, values]) => (
            <fieldset key={field} className="edit-field">
              <legend className="edit-field-label">{FIELD_LABELS[field]}</legend>
              <div className="edit-options">
                {values.map((value) => (
                  <label key={value} className="edit-option">
                    <input
                      type="radio"
                      name={field}
                      value={value}
                      checked={draft[field] === value}
                      onChange={() => handleFieldChange(field, value)}
                    />
                    {LABELS[field][value]}
                  </label>
                ))}
              </div>
            </fieldset>
          ))}
        </div>

        <footer className="edit-drawer-footer">
          {!validation.isValid && (
            <p className="edit-validation-message">{validation.message}</p>
          )}
          {saveError && (
            <p className="edit-save-error">{saveError}</p>
          )}
          <div className="edit-footer-actions">
            <button onClick={onCancel} className="edit-cancel-btn">Cancel</button>
            <button onClick={handleSave} disabled={!canSave} className="edit-save-btn">
              Save
            </button>
          </div>
        </footer>

      </div>
    </div>
  );
}
