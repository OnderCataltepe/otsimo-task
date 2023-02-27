# Transparent Restaurant

A restaurant site demo that serves the same food with different quality ingredients to its customers

## Installation
```
git clone https://github.com/OnderCataltepe/onder-cataltepe-otsimo-frontend-task-2023.git
cd transparent-restaurant 
npm install
```
Note: Get base_url for api
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
- Includes list all the meals with their minimum and maximum prices.  
- Shows a random meal with all ingredients are selected for a given budget
- Filters meals by vegan and vegetarian options
- Sorts meals by ascending price, descending price according to qualities.
- Sorts by alphabetically

### Category Menu:
- Shows meals that its all ingredients are selected as a specific category
- Filters meals by vegan and vegetarian options
- Sorts meals by price in given category
- Sorts by alphabetically

### Dynamic Meal Page
- Find out the highest-quality version of a meal for a given budget
- The price and the quality of the meal should be dynamically calculated and updated when a customer chooses between different qualities of each ingredient.
- Customers should be able to choose between different levels of quality options for each ingredient.
- Ingredients should be listed with their levels of quality options.
- Find out the highest-quality meal for a given budget

