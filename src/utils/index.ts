/* eslint-disable @typescript-eslint/no-explicit-any */
import type {
  MealT,
  MenuItemT,
  IngredientsT,
  BooleanObjectT,
  SelectedIngredientT,
  SortOptT,
  IngredientDetailsT
} from 'types';

/* This function finds the ingredients of the meal from the ingredient list. Then adds the necessary informations that is not in the meal object, such as price and groups.*/

export const combineData = (meal: MenuItemT, ingredientList: IngredientsT[]): MealT => {
  const newIng = meal.ingredients.map((subItem) => {
    const addInfo = ingredientList.find((el) => el.name === subItem.name);

    return {
      ...subItem,
      groups: addInfo?.groups,
      options: addInfo ? addInfo.options : []
    };
  });

  return { ...meal, ingredients: newIng };
};

/* The function is redundant because of the given structure. but I wanted it to be present as it will be functional if different units arrive. */

export const quantityRatio = (quantityType: string, perAmount: string): number => {
  switch (quantityType + '/' + perAmount) {
    case 'gram/kilogram':
    case 'millilitre/litre':
      return 1 / 1000;
    default:
      return 1 / 1000;
  }
};

/* Calculates the total amount of the meal when all the ingredients are selected low, medium or high. */

export const getCategoryPrice = (meal: MealT, type: string): string => {
  const arr = meal.ingredients.map((item) => {
    const quantityType = item.quantity_type;
    const quantity = item.quantity;
    const itemType = item.options.find((el) => el.quality === type)!;

    const ratio = quantityRatio(quantityType, itemType.per_amount);
    switch (type) {
      case 'high':
        return quantity * ratio * itemType.price;
      case 'medium':
        return quantity * ratio * itemType.price + 0.05;
      case 'low':
        return quantity * ratio * itemType.price + 0.1;
      default:
        return quantity * ratio * itemType.price;
    }
  });
  return arr.reduce((a, b) => a + b, 0).toFixed(2);
};
// meal return with ingredient details that includes price, quality score...
export const getIngredientDetails = (meal: MealT): IngredientDetailsT[] => {
  const arr = meal.ingredients.map((item) => {
    const ingredientName = item.name;
    const quantityType = item.quantity_type;
    const quantity = item.quantity;

    const itemArr = item.options
      .map((el) => {
        const ratio = quantityRatio(quantityType, el.per_amount);
        switch (el.quality) {
          case 'high':
            return {
              name: el.name,
              score: 30,
              quality: 'high',
              price: (quantity * ratio * el.price).toFixed(3)
            };
          case 'medium':
            return {
              name: el.name,
              score: 20,
              quality: 'medium',
              price: (quantity * ratio * el.price + 0.05).toFixed(3)
            };
          case 'low':
            return {
              name: el.name,
              score: 10,
              quality: 'low',
              price: (quantity * ratio * el.price + 0.1).toFixed(3)
            };
          default:
            return {
              name: el.name,
              score: 10,
              quality: 'low',
              price: (quantity * ratio * el.price).toFixed(2)
            };
        }
      })
      .sort((a, b) => parseFloat(a.price) - parseFloat(b.price));

    return { name: ingredientName, details: itemArr };
  });

  return arr;
};

/* For the filtering values, we have an object made up of boolean values.(filterV). booleanControl
converts the object to the array of strings that includes values for filter. Then we send the booleanControl to the menu and filter the ones that meet the conditions.*/

export const getFilteredMenu = (filterV: BooleanObjectT, menu: MealT[]): MealT[] => {
  const booleanControl = Object.entries(filterV)
    .filter((item) => item[1])
    .map((el) => el[0]);
  const filteredMenu = menu.filter((meal) =>
    meal.ingredients.every((item) => booleanControl.every((el) => item.groups?.includes(el)))
  );
  return filteredMenu;
};

/* We sort the meals by increasing and decreasing prices according to the quality of the ingredients of the meal. Also, we can sort the meals
by alphabetically. type acts as the key that tells us how to sort.*/

export const getSortOptions = (type: string): SortOptT[] => {
  switch (type) {
    case 'high':
      return [
        { name: 'Default', value: 'default' },
        { name: 'Name (A-Z)', value: 'az' },
        { name: 'Name (Z-A)', value: 'za' },
        { name: 'Price(High Q.)-increasing', value: 'highI' },
        { name: 'Price(High Q.)-decreasing', value: 'highD' }
      ];
    case 'medium':
      return [
        { name: 'Default', value: 'default' },
        { name: 'Name (A-Z)', value: 'az' },
        { name: 'Name (Z-A)', value: 'za' },
        { name: 'Price(Medium Q.)-increasing', value: 'mediumI' },
        { name: 'Price(Medium Q.)-decreasing', value: 'mediumD' }
      ];
    case 'low':
      return [
        { name: 'Default', value: 'default' },
        { name: 'Name (A-Z)', value: 'az' },
        { name: 'Name (Z-A)', value: 'za' },
        { name: 'Price(High Q.)-increasing', value: 'highI' },
        { name: 'Price(High Q.)-decreasing', value: 'highD' },
        { name: 'Price(Low Q.)-increasing', value: 'lowI' },
        { name: 'Price(Low Q.)-decreasing', value: 'lowD' }
      ];
    default:
      return [
        { name: 'Default', value: 'default' },
        { name: 'Name (A-Z)', value: 'az' },
        { name: 'Name (Z-A)', value: 'za' },
        { name: 'Price(High Q.)-increasing', value: 'highI' },
        { name: 'Price(High Q.)-decreasing', value: 'highD' },
        { name: 'Price(Medium Q.)-increasing', value: 'mediumI' },
        { name: 'Price(Medium Q.)-decreasing', value: 'mediumD' },
        { name: 'Price(Low Q.)-increasing', value: 'lowI' },
        { name: 'Price(Low Q.)-decreasing', value: 'lowD' }
      ];
  }
};
// each menu has different sort options
export const sortMenu = (menu: MealT[], type: string): MealT[] => {
  const priceSort = (val: string) =>
    menu.sort(
      (a, b) => parseFloat(getCategoryPrice(a, val)) - parseFloat(getCategoryPrice(b, val))
    );
  switch (type) {
    case 'az':
      return menu.sort((a, b) => a.name.toLowerCase().localeCompare(b.name.toLowerCase()));
    case 'za':
      return menu.sort((a, b) => b.name.toLowerCase().localeCompare(a.name.toLowerCase()));
    case 'highI':
      return priceSort('high');
    case 'highD':
      return priceSort('high').reverse();
    case 'mediumI':
      return priceSort('medium');
    case 'mediumD':
      return priceSort('medium').reverse();
    case 'lowI':
      return priceSort('low');
    case 'lowD':
      return priceSort('low').reverse();
    default:
      return menu;
  }
};

export const calculateQuality = (items: SelectedIngredientT[]): string => {
  const totalPoints = items.map((item) => item.score).reduce((a, b) => a + b, 0);
  const length = items.length;
  const ratioPoints = totalPoints / length;
  const maxPoints = 30; // max:30 average:20 low:10

  return ((100 * ratioPoints) / maxPoints).toFixed(2); // convert full points to 100
};

export const calculatePrice = (items: SelectedIngredientT[]): string => {
  return items
    .map((item) => parseFloat(item.price))
    .reduce((a, b) => a + b, 0)
    .toFixed(2);
};

export const possibleIngredients = (
  list: IngredientDetailsT[],
  n = 0,
  result: any[][] | undefined | never = [],
  current: any[] = []
) => {
  if (n === list.length) result.push(current);
  else
    list[n].details.map((item) =>
      possibleIngredients(list, n + 1, result, [...current, { ...item, name: list[n].name }])
    );

  return result;
};

// random meal for the given budget.

export const getRandom = (budget: string, ingredientDetails: IngredientDetailsT[]) => {
  const allPossibles = possibleIngredients(ingredientDetails);
  const inRangeArr = allPossibles.filter((item) => calculatePrice(item) <= budget);
  const randomIndex = Math.floor(Math.random() * inRangeArr.length);
  return inRangeArr[randomIndex];
};

// best quality meal for the given budget
export const getBest = (budget: string, ingredientDetails: IngredientDetailsT[]) => {
  const allPossibles = possibleIngredients(ingredientDetails);
  const inRangeArr = allPossibles.filter((item) => calculatePrice(item) <= budget);
  if (inRangeArr.length === 0) {
    alert('paran yetmez');
  } else {
    const qualityArr = inRangeArr.map((item) => parseFloat(calculateQuality(item)));
    const maxQuality = Math.max(...qualityArr);
    const maxQualityItem = inRangeArr
      .filter((item) => parseFloat(calculateQuality(item)) === maxQuality)
      .sort((a, b) => parseFloat(calculatePrice(b)) - parseFloat(calculatePrice(a)))[0];

    return maxQualityItem;
  }
};
