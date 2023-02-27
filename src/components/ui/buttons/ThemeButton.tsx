import { useState } from 'react';
import { useDarkSide } from 'hooks/useDarkSide';
import { BsFillSunFill } from 'react-icons/bs';
import { RxMoon } from 'react-icons/rx';

const ThemeButton = (): JSX.Element => {
  const [colorTheme, setTheme] = useDarkSide();
  const [darkSide, setDarkSide] = useState(colorTheme === 'light' ? true : false);
  const toggleDarkMode = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setTheme(colorTheme);
    setDarkSide(event.target.checked);
  };

  return (
    <div className="flex items-center px-6 ">
      <input
        type="checkbox"
        id="switcher"
        className="appearance-none outline-none"
        checked={darkSide}
        onChange={toggleDarkMode}
      />
      <label htmlFor="switcher" className="ml-1 cursor-pointer">
        {darkSide ? (
          <BsFillSunFill className="text-2xl text-yellow-500" />
        ) : (
          <RxMoon className="text-2xl text-blue-900" />
        )}
      </label>
    </div>
  );
};

export default ThemeButton;
