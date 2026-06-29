# ⚙️ Backend Design

## Goal

Design the backend architecture before implementation.

The backend follows a layered architecture where each file has one clear responsibility.

---

# Request Flow

```text
Frontend
    ↓
server.js
    ↓
routes/pizzas.js
    ↓
controllers/pizzas.js
    ↓
config/database.js
    ↓
PostgreSQL
```

---

# Folder Structure

```text
server/
│
├── config/
│   ├── database.js
│   └── reset.js
│
├── controllers/
│   └── pizzas.js
│
├── routes/
│   └── pizzas.js
│
├── .env
│
└── server.js
```

---

# server.js

Responsibilities:

- Create the Express application.
- Register middleware.
- Register API routes.
- Start the server.

Does **not**:

- Query the database.
- Contain CRUD logic.

---

# routes/pizzas.js

Responsibilities:

- Match incoming HTTP requests.
- Call the correct controller function.

Example:

```text
GET     /api/pizzas
POST    /api/pizzas
PUT     /api/pizzas/:id
DELETE  /api/pizzas/:id
```

Does **not**:

- Execute SQL.
- Validate business rules.

---

# controllers/pizzas.js

Responsibilities:

- Handle requests.
- Perform CRUD operations.
- Query PostgreSQL.
- Return JSON responses.
- Handle errors.

Controller functions:

```text
getPizzas()
getPizzaById()

createPizza()

updatePizza()

deletePizza()
```

---

# config/database.js

Responsibilities:

- Read database environment variables.
- Create a shared PostgreSQL connection pool.
- Export the pool.

Does **not**:

- Execute CRUD queries.
- Handle HTTP requests.

---

# reset.js

Responsibilities:

- Create the database schema.
- Reset the database during development.
- Seed initial data if needed.

Not used during normal application requests.

---

# Connection Pool

Only one PostgreSQL connection pool should exist.

```text
database.js
        │
        ▼
     pg.Pool()
        │
 ┌──────┴─────────┐
 ▼                ▼
Controller A   Controller B
```

Controllers reuse the same pool.

Do **not** create a new pool for every request.

---

# REST Endpoints

```text
GET      /api/pizzas

GET      /api/pizzas/:id

POST     /api/pizzas

PUT      /api/pizzas/:id

DELETE   /api/pizzas/:id
```

---

# Backend Design Principles

- One responsibility per file.
- Reuse the connection pool.
- Routes decide *where* requests go.
- Controllers decide *what* happens.
- Database stores data only.
- Keep server.js minimal.

