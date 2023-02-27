# Transparent Restaurant

A restaurant website demo that allows the customer to choose the different quality of ingredients for the meals.

## Installation
```
git clone https://github.com/OnderCataltepe/onder-cataltepe-otsimo-frontend-task-2023.git
cd transparent-restaurant 
npm install
```
<sup> Note: Get BASE_URL for api <sup>
### Run Locally

- npm run dev: dev build
- npm run build: production build
- npm run start: start the project

## Tech Stack
- React.js
- TypeScript
- Redux Toolkit
- react-router-dom
- Tailwind CSS
- Headless UI
- sass
- react-intersection-observer

## Features

### Custom Menu: 
- Lists all the meals with their minimum and maximum prices.  
- Shows a random meal with all ingredients are selected for a given budget
- Filters meals by vegan and vegetarian options
- Sorts the meals according to their prices for each quality.
- Sorts the meals by alphabetically

### Category Menu:
- Shows the meals that its all ingredients are selected as a specific category
- Filters the meals by vegan and vegetarian options
- Sorts the meals by price in given category
- Sorts the meals by alphabetically

### Dynamic Meal Page
- Finds out the highest-quality version of a meal for a given budget
- The price and the quality of the meal should be dynamically calculated and updated when a customer chooses between different qualities of each ingredient.
- Customers should be able to choose between different levels of quality options for each ingredient.
- Ingredients should be listed with their levels of quality options.
- Find out the highest-quality meal for a given budget

