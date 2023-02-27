import { Outlet } from 'react-router-dom';
import { Header, Footer } from 'components';
import { useAppDispatch } from 'redux/hooks';
import { useEffect } from 'react';
import { getIngredients, getMenu } from 'redux/reducers/menuSlice';

const AppLayout = (): JSX.Element => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getMenu('listMeals'));
    dispatch(getIngredients('listIngredients'));
  }, []);

  return (
    <div className="relative flex min-h-screen w-full flex-col justify-between bg-white dark:bg-black">
      <Header />
      <main className="w-full py-16 px-8">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default AppLayout;
