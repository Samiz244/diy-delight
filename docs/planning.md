\# 🍕 DIY Delight – Planning

\#\# Project Overview

DIY Delight is a fun, interactive pizza customization web application where users create their own pizza one step at a time. Rather than filling out a traditional form, users experience the process of "making" a pizza from scratch.

The primary goal of this project is to practice full-stack CRUD development using:

\- React  
\- Express  
\- PostgreSQL  
\- REST APIs

The pizza builder serves as the medium for learning how a frontend communicates with a backend and database.

\---

\# Core Learning Goals

\- Build a React frontend that communicates with an Express API  
\- Perform Create, Read, Update, and Delete (CRUD) operations  
\- Store and retrieve data from PostgreSQL  
\- Practice REST API design  
\- Build a polished user experience

\---

\# User Experience

Instead of presenting a long form, the app guides users through building a pizza one decision at a time.

The pizza begins as a plain dough with the message:

\> \*\*"Name me."\*\*

After each choice, the next customization option becomes available.

Flow:

1\. Name Pizza  
2\. Choose Size  
3\. Choose Crust  
4\. Choose Sauce  
5\. Choose Cheese  
6\. Choose Topping  
7\. Cook Pizza 🍕

Each selection updates the pizza preview.

\---

\# Pizza Customization

\#\# Pizza Name

Free text input.

Example:

\- Sam's Volcano  
\- Midnight Bite  
\- The Classic

\---

\#\# Size

Options:

\- Small  
\- Medium  
\- Large

Visual:

\- Pizza size changes.

\---

\#\# Crust

Options:

\- Thin  
\- Classic  
\- Stuffed

Visual:

\- Border thickness changes.

\---

\#\# Sauce

Options:

\- Tomato  
\- Alfredo  
\- BBQ

Visual:

\- Pizza base color changes.

\---

\#\# Cheese

Options:

\- Mozzarella  
\- Cheddar  
\- Vegan

Visual:

\- Cheese layer color changes.

\---

\#\# Topping

Options:

\- Pepperoni  
\- Mushroom  
\- Olive

Visual:

\- Selected topping appears on the pizza.

\---

\# Cooking Experience

When the user clicks:

\> \*\*Cook 🍕\*\*

The app will:

1\. Display a short cooking animation.  
2\. Show a success message.

Example:

\> 🍕 \*\*Sam's Volcano is ready\!\*\*

After the animation finishes:

\- Save the pizza to the database.  
\- Add it to the saved pizzas list.

\---

\# CRUD Features

\#\# Create

Users build and save a custom pizza.

\---

\#\# Read

Users can:

\- View all saved pizzas.  
\- View a pizza's details.

\---

\#\# Update

Selecting \*\*Edit\*\* opens a slide-in panel from the right.

Users can modify:

\- Name  
\- Size  
\- Crust  
\- Sauce  
\- Cheese  
\- Topping

Choosing \*\*Save\*\* updates the pizza.

Choosing \*\*Cancel\*\* closes the panel without changes.

\---

\#\# Delete

Users can delete any saved pizza.

\---

\# Visual Design

The pizza preview will be built using simple CSS.

No images are required.

Visual changes include:

\- Pizza size  
\- Crust thickness  
\- Sauce color  
\- Cheese color  
\- Topping appearance

\---

\# Pricing

Each customization option has an associated price.

The application calculates the total dynamically.

The displayed price always reflects the current pricing rules.

\---

\# Validation

Impossible combinations should display an error.

Current rule:

\- Vegan cheese \+ Pepperoni → Not allowed

Users receive a friendly message explaining why the combination cannot be saved.

\---

\# Database

Table:

custom\_pizzas

Columns:

\- id  
\- name  
\- size  
\- crust  
\- sauce  
\- cheese  
\- topping  
\- created\_at

\---

\# Technical Goals

Frontend:

\- React  
\- React Router  
\- CSS

Backend:

\- Express  
\- REST API  
\- PostgreSQL

Database:

\- Render PostgreSQL

\---

\# Stretch Ideas (Optional)

\- Progress indicator during pizza creation  
\- Sound effect while cooking  
\- Random pizza generator  
\- Favorite pizza badge  
\- Fun success animations

\---

\# Success Criteria

The application should allow users to:

\- Build a pizza step-by-step  
\- Watch the pizza preview update  
\- Calculate pricing dynamically  
\- Save pizzas  
\- View saved pizzas  
\- Edit pizzas  
\- Delete pizzas  
\- Experience a short cooking animation before saving

The project should demonstrate a complete full-stack CRUD workflow while providing an enjoyable and polished user experience.

✅ Phase 1 — Brainstorming  
    • Chose pizza idea  
    • Reduced scope  
    • Defined CRUD goal

✅ Phase 2 — Product Design  
    • Defined the user experience  
    • Defined customization options  
    • Planned the cooking animation  
    • Planned the edit experience  
    • Planned the database fields

⬜ Phase 3 — Architecture Design  
⬜ Phase 4 — Database Design  
⬜ Phase 5 — Backend Design  
⬜ Phase 6 — Frontend Design  
⬜ Phase 7 — Implementation  
⬜ Phase 8 — Polish & Submission  
