# 🏗️ Architecture Design

## Goal

Design the application structure before writing any code.

---

# Overall Architecture

```text
React
    ↓
Frontend Services
    ↓
Express Routes
    ↓
Controllers
    ↓
PostgreSQL
```

---

# Frontend Responsibilities

- Display pizza preview
- Guide user through pizza creation
- Calculate pizza price
- Display saved pizzas
- Immediate validation of impossible combinations
- Call backend API

---

# Backend Responsibilities

- Store pizzas
- Retrieve pizzas
- Update pizzas
- Delete pizzas
- Validate requests before saving
- Return JSON responses

---

# React Routes

## Home

```
/
```

Purpose:

Pizza Builder

---

## Collection

```
/pizzas
```

Purpose:

- View saved pizzas
- Edit pizzas
- Delete pizzas

---

## Details

```
/pizzas/:id
```

Purpose:

View one pizza.

Read-only.

---

# Builder Components

```
PizzaBuilderPage
│
├── PizzaPreview
├── ProgressTracker
├── PriceDisplay
├── StepSelector
└── CookButton
```

---

## PizzaPreview

Displays the pizza visually.

Changes:

- Size
- Crust
- Sauce
- Cheese
- Topping

---

## ProgressTracker

Displays:

```
🍕 ● ● ○ ○ ○ ○
```

Tracks the user's progress.

---

## PriceDisplay

Displays the dynamically calculated price.

Price is calculated on the frontend.

---

## StepSelector

Displays the current customization step.

Examples:

- Size
- Crust
- Sauce
- Cheese
- Topping

Only unlocked steps are editable.

---

## CookButton

Appears only after all customization steps are complete.

Starts the cooking animation.

---

# Collection Components

```
PizzaCollectionPage
│
├── PizzaCard
│   └── Mini PizzaPreview
├── EditDrawer
└── DeleteButton
```

---

## PizzaCard

Displays:

- Mini pizza preview
- Pizza name
- Pizza choices
- Current calculated price

Buttons:

- View
- Edit
- Delete

---

## EditDrawer

Slides in from the right.

Allows editing:

- Name
- Size
- Crust
- Sauce
- Cheese
- Topping

Save updates the database.

Cancel closes the drawer.

---

# REST API

```
GET     /api/pizzas
GET     /api/pizzas/:id

POST    /api/pizzas

PUT     /api/pizzas/:id

DELETE  /api/pizzas/:id
```

---

# Controller Functions

```
getPizzas()

getPizzaById()

createPizza()

updatePizza()

deletePizza()
```

---

# Frontend Service Functions

```
getPizzas()

getPizza(id)

createPizza()

updatePizza(id, pizza)

deletePizza(id)
```

---

# Price Calculation

The backend stores:

- Name
- Size
- Crust
- Sauce
- Cheese
- Topping

The frontend calculates the current price whenever pizzas are displayed.

---

# Validation

Frontend:

Immediate user feedback.

Backend:

Final validation before database operations.

Current rule:

- Vegan Cheese + Pepperoni is invalid.

---

# Success Flow

```
Cook
    ↓
Cooking Animation
    ↓
Pizza Ready
    ↓
Saved to Database
    ↓
Success Screen
```

Success screen:

```
🍕

Sam's Volcano

⭐⭐⭐⭐⭐

Your pizza is ready!

Successfully added to
your Pizza Collection.

[ Make Another Pizza ]

[ View Collection ]
```

