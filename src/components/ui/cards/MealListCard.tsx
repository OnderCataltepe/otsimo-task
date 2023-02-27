import type { MenuItemT, IngredientsT, MealT } from 'types';
import { useNavigate } from 'react-router-dom';
import { combineData, getCategoryPrice } from 'utils';
import { OutlinedButton } from 'components';
interface LIProps {
  type: string;
  item: MenuItemT;
  ingredientList: IngredientsT[];
}
const MealListCard = ({ item, ingredientList, type }: LIProps): JSX.Element => {
  const navigate = useNavigate();
  const combinedItem: MealT = combineData(item, ingredientList);
  const maxPrice: string = getCategoryPrice(combinedItem, 'high');
  const minPrice: string = getCategoryPrice(combinedItem, 'low');

  return (
    <div className="my-4 flex min-h-[150px] w-full justify-between rounded-md bg-slate-100 p-4 shadow-sm shadow-slate-500 dark:bg-inherit dark:shadow-slate-400">
      <div className="flex w-1/2 flex-col justify-between">
        <div>
          <p className="font-lato text-lg font-semibold tracking-wide text-brownPrimary md:text-2xl ">
            {item.name}
          </p>
        </div>
        <br />
        <div>
          <p className="text-base font-semibold text-gray-700 dark:text-gray-400 md:text-xl">
            Ingredients:{' '}
            <span className="text-sm text-black dark:text-white md:text-base">
              {type === 'custom'
                ? combinedItem.ingredients.map((item) => item.name).join('/')
                : combinedItem.ingredients
                    .map((item) => item.options.find((subItem) => subItem.quality === type)!.name)
                    .join('/')}
            </span>{' '}
          </p>
        </div>
      </div>

      <div className="flex w-1/2 flex-col items-end justify-between">
        <div>
          <p className="text-sm text-gray-700 dark:text-gray-400 md:text-base">
            {type === 'custom' ? (
              <>
                from{' '}
                <span className="text-lg font-semibold text-black dark:text-white">
                  {minPrice}${' '}
                </span>{' '}
                to{' '}
                <span className="text-lg font-semibold text-black dark:text-white">
                  {maxPrice}$
                </span>{' '}
              </>
            ) : (
              <>
                Price:
                <span> {getCategoryPrice(combinedItem, type)}$ </span>
              </>
            )}
          </p>
        </div>
        {type === 'custom' && (
          <div>
            <OutlinedButton
              onClick={() => navigate(`/meal/${item.id}`, { state: { budget: '' } })}
              text="Details"
              color="green"
              size="medium"
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default MealListCard;
