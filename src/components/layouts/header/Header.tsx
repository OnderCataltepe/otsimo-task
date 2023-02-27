import { ThemeButton, Navbar, Search } from 'components';
import { headerLogo } from 'assets';
import { useEffect } from 'react';
const Header = (): JSX.Element => {
  let timeout: ReturnType<typeof setTimeout>;
  let scroll = 0;
  useEffect(() => {
    window.onscroll = () => {
      if (timeout) {
        clearTimeout(timeout);
      }

      timeout = setTimeout(() => {
        if (window.scrollY > 0) {
          document.getElementById('header')?.classList.add('stickyAnim');
          document.getElementById('headerLogo')?.classList.add('animatedLogo');
        } else {
          document.getElementById('header')?.classList.remove('stickyAnim');
          document.getElementById('headerLogo')?.classList.remove('animatedLogo');
        }

        scroll = window.scrollY;
      }, 10);
    };
  }, []);

  return (
    <header
      id="header"
      className="left-0 flex py-1 transition-all duration-500 ease-in-out md:py-2">
      <div className="relative flex  w-full justify-between">
        <Navbar />
        <div
          id="headerLogo"
          className="absolute top-0 left-0 z-20 flex w-full items-center justify-between">
          <hr className="w-1/2 border-brownPrimary" />
          <div className="w-36 transition-transform duration-1000 ease-out md:w-52">
            <a href="/">
              <img alt="logo" src={headerLogo} className="h-auto w-full " />
            </a>
          </div>
          <hr className="w-1/2 border-brownPrimary" />
        </div>
        <div className="z-20 flex items-center">
          <div className="hidden md:block">
            <Search />
          </div>
          <div>
            <ThemeButton />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
