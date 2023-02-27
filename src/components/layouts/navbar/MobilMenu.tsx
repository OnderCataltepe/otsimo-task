import { NAV_DATA } from 'constants/index';
import { NavLink } from 'react-router-dom';
import { Search } from 'components';
interface MobilProps {
  setOpenMenu: React.Dispatch<React.SetStateAction<boolean>>;
}
const MobilMenu = ({ setOpenMenu }: MobilProps): JSX.Element => {
  return (
    <div className="z-10 overflow-y-visible md:hidden">
      <div className="absolute top-0 left-0 flex h-screen w-full animate-topToBottom flex-col items-center overflow-y-auto bg-white pt-20 text-center dark:bg-black ">
        <ul className="mb-4 flex-col items-center">
          {NAV_DATA.map((item) => (
            <li
              key={item.id}
              className="py-3 font-poppins text-lg font-bold tracking-wider text-gray-700 dark:text-gray-400">
              <NavLink
                className="hover:text-brownPrimary dark:hover:text-brownPrimary "
                onClick={() => setOpenMenu(false)}
                to={item.path}>
                {item.title}
              </NavLink>
            </li>
          ))}
        </ul>
        <Search closeMenu={() => setOpenMenu(false)} />
      </div>
    </div>
  );
};

export default MobilMenu;
