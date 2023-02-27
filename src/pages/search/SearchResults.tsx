import { useParams } from 'react-router-dom';
import { useAppSelector } from 'redux/hooks';
import { MealListCard } from 'components';
import type { MealT } from 'types';
import { combineData } from 'utils';

const SearchResults = (): JSX.Element => {
  const { searchId } = useParams();
  const { menu, ingredients } = useAppSelector((state) => state.meals);
  const combinedMenu: MealT[] = menu.map((item) => combineData(item, ingredients));
  const getRelatedMeals = combinedMenu.filter(
    (item) =>
      item.name.toLowerCase().includes(searchId!.toString().toLowerCase()) ||
      item.ingredients.some((subItem) =>
        subItem.name.toLowerCase().includes(searchId!.toString().toLowerCase())
      )
  );

  return (
    <div>
      {getRelatedMeals.length > 0 ? (
        <div>
          <h1 className="lg dark:text-white md:text-3xl">
            Search Results for{' '}
            <span className="text-bold text-xl text-brownPrimary md:text-5xl">{searchId}</span>{' '}
          </h1>
          {getRelatedMeals.map((item) => (
            <MealListCard type="custom" key={item.id} item={item} ingredientList={ingredients} />
          ))}
        </div>
      ) : (
        <div>
          <p className="border-2 p-4 text-center text-xl font-semibold tracking-wide dark:text-white md:text-4xl">
            Sorry! No Result Found!
          </p>
        </div>
      )}
    </div>
  );
};

export default SearchResults;
