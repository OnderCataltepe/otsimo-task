import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';
import type { MenuItemT, IngredientsT } from 'types';

type FetchTodosError = {
  message: string;
};

export const getIngredients = createAsyncThunk<IngredientsT[], string, { rejectValue: string }>(
  'ingredients/get',
  async (url, { rejectWithValue }) => {
    try {
      const response = await fetch(`${process.env.REACT_APP_BASE_URL}/${url}`);
      if (!response.ok) {
        return rejectWithValue('Failed to fetch ingredients');
      }
      return response.json();
    } catch (err) {
      return rejectWithValue(err.message);
    }
  }
);
export const getMenu = createAsyncThunk<MenuItemT[], string, { rejectValue: string }>(
  'menu/get',
  async (url, { rejectWithValue }) => {
    try {
      const response = await fetch(`${process.env.REACT_APP_BASE_URL}/${url}`);
      if (!response.ok) {
        throw new Error('Failed to fetch MenuItems');
      }
      return response.json();
    } catch (err) {
      return rejectWithValue(err.message);
    }
  }
);

interface MenuState {
  menu: MenuItemT[];
  ingredients: IngredientsT[];
  loadingMenu: boolean;
  loadingIngredients: boolean;
  ingredientError: null | string;
  menuError: null | string;
}

const initialState = {
  menu: [],
  ingredients: [],
  loadingMenu: false,
  loadingIngredients: false,
  ingredientError: null,
  menuError: null
} as MenuState;

export const menuSlice = createSlice({
  name: 'meals',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getMenu.fulfilled, (state, action: PayloadAction<MenuItemT[]>) => {
      state.menu = action.payload;
      state.loadingMenu = false;
      state.menuError = null;
    });
    builder.addCase(getMenu.pending, (state, action) => {
      state.loadingMenu = true;
      state.menuError = null;
    });
    builder.addCase(getMenu.rejected, (state, action) => {
      state.loadingMenu = false;
      if (action.payload) state.menuError = action.payload;
    });
    builder.addCase(getIngredients.fulfilled, (state, action: PayloadAction<IngredientsT[]>) => {
      state.ingredients = action.payload;
      state.loadingIngredients = false;
      state.ingredientError = null;
    });
    builder.addCase(getIngredients.pending, (state, action) => {
      state.loadingIngredients = true;
      state.ingredientError = null;
    });
    builder.addCase(getIngredients.rejected, (state, action) => {
      state.loadingIngredients = false;
      if (action.payload) state.ingredientError = action.payload;
    });
  }
});

export default menuSlice.reducer;
