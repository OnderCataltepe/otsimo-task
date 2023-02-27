import type { MealT } from 'types';
import { RadioGroup, Budget, TextModal } from 'components';
import { getIngredientDetails, calculateQuality, calculatePrice, getRandom, getBest } from 'utils';
import { useState } from 'react';
import { useLocation } from 'react-router-dom';
const MealCard = (meal: MealT): JSX.Element => {
  const { state } = useLocation();
  const [openModal, setOpenModal] = useState<boolean>(false);
  const ingredientDetails = getIngredientDetails(meal);

  const initialSelected =
    state.budget !== ''
      ? getRandom(state.budget, ingredientDetails)
      : getIngredientDetails(meal).map((item) => ({
          name: item.name, // general name
          score: item.details[1].score,
          price: item.details[1].price,
          quality: item.details[1].quality
        }));
  const [selectedIng, setSelectedIng] = useState(initialSelected);

  const getBestQuality = (budget: string) => {
    const bestSelection = getBest(budget, ingredientDetails);
    if (bestSelection) {
      setSelectedIng(bestSelection);
    } else {
      setOpenModal(true);
    }
  };

  return (
    <div className="w-full rounded-md bg-slate-100 p-4 shadow-sm shadow-slate-500 dark:bg-inherit dark:shadow-slate-400">
      <div>
        <p className="font-semibold text-blue-500">
          Find the best quality version of meal for this budget
        </p>
        <Budget text="Get" sendBudget={getBestQuality} />
      </div>
      <hr className="my-4" />
      <div className="my-8 flex justify-between">
        <div>
          <h1 className="font-lato text-lg font-semibold tracking-wide text-brownPrimary md:text-2xl">
            {meal.name}
          </h1>
        </div>
        <div className="flex flex-col text-sm font-semibold text-gray-700 dark:text-gray-400 md:flex-row md:text-xl">
          <div>
            <p>
              Quality Score:{' '}
              <span className="text-black dark:text-white">{calculateQuality(selectedIng)}%</span>
            </p>
          </div>
          <div className="ml-0 md:ml-4">
            <p>
              Price:{' '}
              <span className="text-black dark:text-white">{calculatePrice(selectedIng)}$</span>
            </p>
          </div>
        </div>
      </div>
      <div className="mb-2 flex w-full items-center text-base font-semibold text-gray-700 dark:text-gray-400 md:text-xl">
        <p className="w-full text-center md:w-1/5">Ingredients:</p>
        <div className="hidden w-4/5 md:flex ">
          <div className="w-1/3 text-center">
            <p>Low</p>
          </div>
          <div className="w-1/3 text-center">
            <p>Medium</p>
          </div>
          <div className="w-1/3 text-center">
            <p>High</p>
          </div>
        </div>
      </div>
      {ingredientDetails.map((item, index) => (
        <div key={index} className="flex w-full items-center border-t-2 md:border-t-0">
          <p className="w-1/5 text-base font-semibold text-black dark:text-white md:text-lg">
            {item.name}
          </p>
          <div className="flex w-4/5 ">
            <RadioGroup selected={selectedIng} setSelected={setSelectedIng} items={item} />
          </div>
        </div>
      ))}
      {openModal && (
        <TextModal
          type="warning"
          text="We don&#39;t have a meal that fits your budget. Can you increase the budget a little?"
          open={openModal}
          setOpenModal={setOpenModal}
        />
      )}
    </div>
  );
};

export default MealCard;
