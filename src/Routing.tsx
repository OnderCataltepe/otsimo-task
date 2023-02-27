import { RouterProvider, createBrowserRouter, RouteObject } from 'react-router-dom';
import { Home, OurStory, MenuDefault, Meal, CategoryMenu, ErrorPage, SearchResults } from 'pages';
import { AppLayout } from 'components';

const routes: RouteObject[] = [
  {
    path: '/',
    element: <AppLayout />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: 'menu',
        element: <MenuDefault />
      },
      {
        path: 'menu/:menuId',
        element: <CategoryMenu />
      },
      { path: '/meal/:mealId', element: <Meal /> },
      {
        path: 'our-story',
        element: <OurStory />
      },
      {
        path: 'search/:searchId',
        element: <SearchResults />
      },
      {
        path: '*',
        element: <ErrorPage />
      }
    ]
  }
];
const router = createBrowserRouter(routes);

const Routing = (): JSX.Element => {
  return <RouterProvider router={router} />;
};

export default Routing;
