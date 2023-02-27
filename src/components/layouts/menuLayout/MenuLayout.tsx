import { useEffect, useState } from 'react';
import { useAppSelector } from 'redux/hooks';
import { useNavigate } from 'react-router-dom';
import {
  MealListCard,
  Filter,
  SelectBox,
  Loading,
  Budget,
  ErrorMessage,
  TextModal
} from 'components';
import { combineData, getFilteredMenu, sortMenu, getSortOptions, getCategoryPrice } from 'utils';
import type { MealT, BooleanObjectT, SortOptT } from 'types';
import { filterOptions } from 'constants/index';
interface MLProps {
  type: string;
}
const MenuLayout = ({ type }: MLProps): JSX.Element => {
  const { menu, ingredients, loadingMenu, loadingIngredients, ingredientError, menuError } =
    useAppSelector((state) => state.meals);
  const sortOptions: SortOptT[] = getSortOptions(type);
  const combinedMenu: MealT[] = menu.map((item) => combineData(item, ingredients));
  const [sortedMenu, setSortedMenu] = useState<MealT[]>(combinedMenu);
  const [selected, setSelected] = useState<string>('default');
  const [filterV, setFilterV] = useState<BooleanObjectT>(filterOptions);
  const [openModal, setOpenModal] = useState<boolean>(false);
  const navigate = useNavigate();

  useEffect(() => {
    const filtered = getFilteredMenu(filterV, combinedMenu);
    const sorted = sortMenu(filtered, selected);
    setSortedMenu(sorted);
  }, [filterV.vegan, filterV.vegetarian, selected]);

  if (loadingMenu || loadingIngredients) {
    return <Loading />;
  }
  if (ingredientError || menuError) {
    const message =
      ingredientError && menuError
        ? ingredientError + '\n' + menuError
        : menuError
        ? menuError
        : ingredientError;
    return <ErrorMessage message={message} />;
  }
  const getRandomMeal = (budget: string) => {
    const inRangeMeals = sortedMenu.filter(
      (item) => parseFloat(getCategoryPrice(item, 'low')) <= parseFloat(budget)
    );
    if (inRangeMeals.length === 0) {
      setOpenModal(true);
    } else {
      const randomIndex = Math.floor(Math.random() * inRangeMeals.length);

      navigate(`/meal/${inRangeMeals[randomIndex].id}`, { state: { budget: budget } });
    }
  };

  return (
    <>
      {ingredients.length > 0 && (
        <div>
          <h1 className="my-4 text-center font-poppins text-3xl uppercase dark:text-white md:mt-8">
            {type} Quality Meals
          </h1>
          <div className="flex w-full flex-col justify-between md:flex-row md:items-end">
            <div>
              <p className="mb-1 dark:text-white">Filter by</p>
              <Filter filterV={filterV} setFilterV={setFilterV} />
            </div>
            <div className="mt-2 w-full md:mt-0 md:w-1/2 md:min-w-[300px]">
              <p className="mb-1 dark:text-white">Sort by</p>
              {sortOptions && (
                <SelectBox
                  sortOptions={sortOptions}
                  selected={selected}
                  setSelected={setSelected}
                />
              )}
            </div>
          </div>
          {type === 'custom' && (
            <div className="my-8">
              <p className="font-semibold text-blue-500">Get random meal for selected budget</p>
              <Budget text="Random" sendBudget={getRandomMeal} />
            </div>
          )}

          {sortedMenu.length > 0 &&
            sortedMenu.map((item) => (
              <MealListCard type={type} key={item.id} item={item} ingredientList={ingredients} />
            ))}
        </div>
      )}
      {openModal && (
        <TextModal
          type="warning"
          text="We don&#39;t have a meal that fits your budget. Can you increase the budget a little?"
          open={openModal}
          setOpenModal={setOpenModal}
        />
      )}
    </>
  );
};

export default MenuLayout;
