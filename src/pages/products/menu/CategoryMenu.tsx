import { useParams } from 'react-router-dom';
import { MenuLayout } from 'components';
import { menuPages } from 'constants/index';
import { ErrorPage } from 'pages';

const CategoryMenu = ():JSX.Element => {
  const { menuId } = useParams();
  const existPage = menuId && menuPages.includes(menuId);
  if (!existPage) {
    return <ErrorPage />;
  }
  return <MenuLayout type={menuId} />;
};

export default CategoryMenu;
