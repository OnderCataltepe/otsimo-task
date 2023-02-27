import { NAV_DATA } from 'constants/index';
import { NavLink, useNavigate } from 'react-router-dom';

const LargeMenu = (): JSX.Element => {
  return (
    <div className="z-30 hidden md:flex">
      <ul className="flex pl-2">
        {NAV_DATA.map((item) => (
          <li
            key={item.id}
            className="px-3 font-poppins font-bold tracking-wider text-gray-700 hover:text-brownPrimary dark:text-gray-400 dark:hover:text-brownPrimary">
            <NavLink to={item.path}>{item.title}</NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LargeMenu;
