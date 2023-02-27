// Api Data Types

export interface MealT {
  id: number;
  name: string;
  ingredients: {
    groups: string[] | undefined;
    options: {
      name: string;
      quality: string;
      price: number;
      per_amount: string;
    }[];
    name: string;
    quantity: number;
    quantity_type: string;
  }[];
}
export interface MenuItemT {
  id: number;
  name: string;
  ingredients: {
    name: string;
    quantity: number;
    quantity_type: string;
  }[];
}
export interface IngredientsT {
  name: string;
  groups?: string[];
  options: {
    name: string;
    quality: string;
    price: number;
    per_amount: string;
  }[];
}

// Created Data Types

export interface SelectedIngredientT {
  name: string;
  price: string;
  score: number;
  quality: string;
}

export interface IngredientDetailsT {
  name: string;
  details: {
    name: string;
    score: number;
    quality: string;
    price: string;
  }[];
}

// Constants Types

export interface NavDataT {
  id: number;
  title: string;
  path: string;
}

export interface BannerT {
  id: number;
  text: string;
  path: string;
  image: string;
  color: string;
}

export interface SortOptT {
  name: string;
  value: string;
}

// Common Types

export interface BooleanObjectT {
  [key: string]: boolean;
}

export interface StringObjectT {
  [key: string]: string;
}
