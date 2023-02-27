import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { MealCard, ErrorMessage } from 'components';
import type { StringObjectT, MealT } from 'types';
const Meal = (): JSX.Element => {
  const { mealId } = useParams();
  const [meal, setMeal] = useState<MealT | null>();
  const [error, setError] = useState<StringObjectT>({ message: '' });

  useEffect(() => {
    const getMeal = async () => {
      try {
        const response = await fetch(`${process.env.REACT_APP_BASE_URL}/get/${mealId}`);
        if (!response.ok) {
          const message = `An error has occured: ${response.status}`;
          throw new Error(message);
        } else {
          const data = await response.json();
          setMeal(data);
        }
      } catch (err) {
        console.log({ message: err.message });
        setError({ message: err.message });
      }
    };
    getMeal();
  }, []);
  if (error.message !== '') {
    return <ErrorMessage message={error.message} />;
  }
  return <div>{meal && <MealCard {...meal} />}</div>;
};

export default Meal;
