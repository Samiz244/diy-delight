\# 🎨 Frontend Design

\#\# Goal

Design the React frontend structure before implementation.

The frontend should support a guided pizza-building experience while keeping state, components, utilities, and API calls clearly separated.

\---

\# React Routes

\`\`\`text  
/             → Pizza Builder  
/pizzas       → Pizza Collection  
/pizzas/:id   → Pizza Detail  
\`\`\`

\---

\# Frontend Folder Structure

\`\`\`text  
src/  
├── pages/  
│   ├── PizzaBuilderPage.jsx  
│   ├── PizzaCollectionPage.jsx  
│   └── PizzaDetailPage.jsx  
│  
├── components/  
│   ├── PizzaPreview.jsx  
│   ├── ProgressTracker.jsx  
│   ├── PriceDisplay.jsx  
│   ├── StepSelector.jsx  
│   ├── CookButton.jsx  
│   ├── PizzaCard.jsx  
│   └── EditDrawer.jsx  
│  
├── services/  
│   └── PizzasAPI.js  
│  
└── utilities/  
    ├── calculatePrice.js  
    └── validatePizza.js  
\`\`\`

\---

\# State Ownership

\`PizzaBuilderPage\` owns the pizza-building state.

\`\`\`js  
{  
  name: "",  
  size: "",  
  crust: "",  
  sauce: "",  
  cheese: "",  
  topping: ""  
}  
\`\`\`

Reason:

\- Pizza preview needs the pizza state.  
\- Price display needs the pizza state.  
\- Progress tracker needs progress state.  
\- Step selector updates the pizza state.  
\- Cook button depends on completion state.

State should live in the closest common parent.

\---

\# Builder Page Components

\`\`\`text  
PizzaBuilderPage  
│  
├── PizzaPreview  
├── ProgressTracker  
├── PriceDisplay  
├── StepSelector  
└── CookButton  
\`\`\`

\---

\# PizzaPreview

Displays the pizza visually.

Reusable with variants:

\`\`\`js  
variant="large"  
variant="small"  
\`\`\`

Used in:

\- Builder page  
\- Collection cards  
\- Detail page

Visual changes:

\- Size changes pizza scale.  
\- Crust changes border thickness.  
\- Sauce changes base color.  
\- Cheese changes cheese layer.  
\- Topping changes topping appearance.

\---

\# ProgressTracker

Displays pizza-building progress:

\`\`\`text  
🍕 ● ● ● ○ ○ ○  
\`\`\`

Tracks completed steps.

\---

\# PriceDisplay

Displays the calculated price.

Does \*\*not\*\* own pricing logic.

Receives price from the page.

\---

\# StepSelector

Displays the current step options.

Examples:

\- Size  
\- Crust  
\- Sauce  
\- Cheese  
\- Topping

Unlocked previous steps remain editable.

\---

\# CookButton

Appears only after all steps are complete.

Starts the cooking animation and save flow.

\---

\# Collection Page Components

\`\`\`text  
PizzaCollectionPage  
│  
├── PizzaCard  
│   └── PizzaPreview variant="small"  
└── EditDrawer  
\`\`\`

\---

\# PizzaCard

Displays:

\- Mini pizza preview  
\- Pizza name  
\- Pizza choices  
\- Current calculated price  
\- View button  
\- Edit button  
\- Delete button

\---

\# EditDrawer

Slides in from the right.

Uses temporary draft state.

Reason:

\- Save commits changes.  
\- Cancel discards draft changes.  
\- Collection state remains stable until save.

Editable fields:

\- Name  
\- Size  
\- Crust  
\- Sauce  
\- Cheese  
\- Topping

\---

\# Services

API calls live in:

\`\`\`text  
src/services/PizzasAPI.js  
\`\`\`

Functions:

\`\`\`js  
getPizzas()  
getPizza(id)  
createPizza(pizza)  
updatePizza(id, pizza)  
deletePizza(id)  
\`\`\`

Pages call service functions instead of using raw \`fetch()\` everywhere.

\---

\# Utilities

Utility files hold reusable business logic.

\`\`\`text  
utilities/  
├── calculatePrice.js  
└── validatePizza.js  
\`\`\`

\#\# calculatePrice.js

Responsible for pricing rules.

Used by:

\- Builder page  
\- Collection page  
\- Detail page

\#\# validatePizza.js

Responsible for frontend validation rules.

Current invalid combo:

\`\`\`text  
Small \+ Stuffed Crust  
\`\`\`

Error:

\`\`\`text  
Stuffed crust is only available for Medium and Large pizzas.  
\`\`\`

\---

\# Frontend Principles

\- Pages coordinate.  
\- Components display and collect input.  
\- Utilities contain reusable logic.  
\- Services communicate with the backend.  
\- Shared state lives in the closest common parent.  
\- Edit forms use draft state until saved.  
\- Reuse components instead of duplicating logic.  
