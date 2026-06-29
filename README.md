# WEB103 Project 4 - *DIY Delight*

Submitted by: **Samuel Alemu**

## About this web app

DIY Delight is an interactive pizza customization web application where users build their own pizza one step at a time. As ingredients are selected, the pizza preview updates visually and the total price is recalculated in real time. Once completed, users can cook their pizza, save it to a PostgreSQL database, browse their pizza collection, view individual pizzas, edit saved pizzas, or delete them.

Time spent: **12 hours**

---

## Required Features

The following **required** functionality is completed:

- [x] **The web app uses React to display data from the API.**
- [x] **The web app is connected to a PostgreSQL database, with an appropriately structured `CustomItem` table.**
  - [x] **NOTE: Your walkthrough includes a view of the Render dashboard demonstrating that the PostgreSQL database is available.**
  - [x] **NOTE: Your walkthrough includes a demonstration of the table contents using `SELECT * FROM custom_pizzas;`.**
- [x] **Users can view multiple features of the `CustomItem`.**
- [x] **Each customizable feature has multiple options to choose from.**
- [x] **On selecting each option, the displayed visual icon for the `CustomItem` updates to match the option selected.**
- [x] **The total price updates dynamically as different options are selected.**
- [x] **The visual interface changes in response to customizable features.**
- [x] **Users can submit their choices to save the customized item.**
- [x] **If a user submits an impossible feature combination, an appropriate error message is displayed and the item is not saved.**
- [x] **Users can view a list of all submitted `CustomItem`s.**
- [x] **Users can edit a submitted `CustomItem` from the collection page.**
- [x] **Users can delete a submitted `CustomItem` from the collection page.**
- [x] **Users can update or delete `CustomItem`s from the detail page.**

---

## Optional Features

The following **optional** functionality is implemented:

- [x] **Invalid combinations are prevented before submission by disabling the Cook button and displaying a validation message.**

---

## Additional Features

- [x] Guided step-by-step pizza building experience.
- [x] Dynamic pizza preview built entirely with HTML and CSS (no images).
- [x] Cooking animation before saving the pizza.
- [x] Success screen after saving with quick navigation back to the builder or collection.
- [x] Layered architecture with separated services, utilities, controllers, and routes.
- [x] Dynamic price calculation using reusable utility functions.
- [x] Reusable `PizzaPreview` component shared between the builder, collection, and detail pages.
- [x] Edit drawer with draft state so Cancel safely discards changes.

--- 

## Video Walkthrough

Here's a walkthrough of the implemented features:
<div>
    <a href="https://www.loom.com/share/fd8372cdf1d347ecb2b420ea9e17e60c">
      <p>DIY Delight - 29 June 2026 - Watch Video</p>
    </a>
    <a href="https://www.loom.com/share/fd8372cdf1d347ecb2b420ea9e17e60c">
      <img style="max-width:300px;" src="https://cdn.loom.com/sessions/thumbnails/fd8372cdf1d347ecb2b420ea9e17e60c-0a4ad1d5d48a6e55-full-play.gif#t=0.1">
    </a>
  </div>

**GIF created with:** Loom

---

## Notes

One of the biggest challenges during this project was designing a maintainable architecture before implementation. Instead of immediately writing code, the project was planned by first defining the product design, database schema, backend architecture, frontend architecture, and implementation flow. This approach made the implementation significantly smoother and reinforced the importance of separation of concerns, reusable components, and clean CRUD design in full-stack React applications.

---

## License

Copyright 2026 Samuel Alemu

Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License.

You may obtain a copy of the License at

> http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.
