# 🗄️ Database Design

## Goal

Design a simple, maintainable PostgreSQL schema that supports the CRUD requirements for DIY Delight.

The focus of this project is learning full-stack CRUD, not advanced relational database modeling.

---

# Database Philosophy

The database stores the user's pizza selections.

It does **not** store calculated values such as the total price.

Price is calculated on the frontend using the current pricing rules.

---

# Database Table

Table:

```text
custom_pizzas
```

---

# Columns

| Column | Type | Notes |
|---------|------|------|
| id | SERIAL | Primary Key |
| name | TEXT | Required |
| size | TEXT | Required |
| crust | TEXT | Required |
| sauce | TEXT | Required |
| cheese | TEXT | Required |
| topping | TEXT | Required |
| created_at | TIMESTAMP | Generated automatically |

---

# Primary Key

```sql
id SERIAL PRIMARY KEY
```

Reason:

- Easy to debug
- Easy to test
- Appropriate for this project

UUIDs will be explored in future projects.

---

# Required Fields

```sql
NOT NULL
```

Applied to:

- name
- size
- crust
- sauce
- cheese
- topping

This ensures incomplete pizzas can never be stored.

---

# CHECK Constraints

To maintain data integrity, option fields are limited to valid values.

## Size

```text
small
medium
large
```

---

## Crust

```text
thin
classic
stuffed
```

---

## Sauce

```text
tomato
alfredo
bbq
```

---

## Cheese

```text
mozzarella
cheddar
vegan
```

---

## Topping

```text
pepperoni
mushroom
olive
```

---

# Created At

The database automatically records when a pizza is created.

```sql
created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
```

The frontend never supplies this value.

The database is the source of truth.

---

# Invalid Combination Rule

To satisfy the project requirement for impossible feature combinations:

```
Small Size
+
Stuffed Crust
```

Result:

```
Stuffed crust is only available
for Medium and Large pizzas.
```

Validation should occur:

- Immediately on the frontend
- Again on the backend before saving

---

# Tables

Only one table is required.

```
custom_pizzas
```

Separate tables for sizes, sauces, cheeses, crusts, or toppings are intentionally omitted because those values are fixed and not managed independently.

This keeps the project focused on CRUD concepts rather than relational modeling.

---

# Final Schema (Conceptual)

```text
custom_pizzas
──────────────────────────────
id
name
size
crust
sauce
cheese
topping
created_at
```

---

# Design Principles

- Keep the schema simple.
- Store only the pizza configuration.
- Calculate price dynamically.
- Enforce data integrity with constraints.
- Avoid unnecessary tables.

