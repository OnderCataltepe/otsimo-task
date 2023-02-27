import LargeMenu from './LargeMenu';
import MobilMenu from './MobilMenu';
import { useState } from 'react';
import { HamburgerButton } from 'components';

const Navbar = (): JSX.Element => {
  const [openMenu, setOpenMenu] = useState<boolean>(false);
  return (
    <nav className="flex py-2 md:py-4">
      <LargeMenu />
      <HamburgerButton openMenu={openMenu} setOpenMenu={setOpenMenu} />
      {openMenu && <MobilMenu setOpenMenu={setOpenMenu} />}
    </nav>
  );
};

export default Navbar;
