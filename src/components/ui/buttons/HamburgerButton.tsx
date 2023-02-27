interface HProps {
  openMenu: boolean;
  setOpenMenu: React.Dispatch<React.SetStateAction<boolean>>;
}

const HamburgerButton = ({ openMenu, setOpenMenu }: HProps): JSX.Element => {
  return (
    <div className="z-30 flex items-center justify-center px-6 md:hidden">
      <div>
        <input
          id="hamburger"
          className="peer hidden"
          onChange={(e) => setOpenMenu(e.target.checked)}
          checked={openMenu}
          type="checkbox"
        />

        <label
          htmlFor="hamburger"
          className="cursor-pointer peer-checked:[&>span>span:nth-child(1)]:origin-[10%_10%] peer-checked:[&>span>span:nth-child(1)]:rotate-45 peer-checked:[&>span>span:nth-child(2)]:opacity-0 peer-checked:[&>span>span:nth-child(3)]:origin-[10%_90%] peer-checked:[&>span>span:nth-child(3)]:-rotate-45">
          <span>
            <span className="m-1 block h-0.5 w-[22px] bg-gray-700 transition-all duration-300 dark:bg-gray-400"></span>
            <span className="m-1 block h-0.5 w-[22px] bg-gray-700 opacity-100 transition-all duration-300 dark:bg-gray-400"></span>
            <span className="m-1 block h-0.5 w-[22px] bg-gray-700 transition-all duration-300 dark:bg-gray-400"></span>
          </span>
        </label>
      </div>
    </div>
  );
};

export default HamburgerButton;
