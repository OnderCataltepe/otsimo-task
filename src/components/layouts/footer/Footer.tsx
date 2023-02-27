import { ImFacebook, ImTwitter, ImInstagram, ImYoutube } from 'react-icons/im';
import { IconButton } from 'components';
const Footer = (): JSX.Element => {
  return (
    <footer className="flex w-full items-center justify-between border-t-2 px-6 ">
      <p className="w-1/2 font-sans text-xs tracking-wide text-gray-700 dark:text-gray-400 md:text-base">
        © Copyright 2023 Transparent. All rights reserved.
      </p>
      <div className="flex w-1/2 justify-end py-5  text-center ">
        <div className="flex flex-col text-center">
          <p className="mb-2 select-none font-semibold dark:text-white">Social Media:</p>
          <div className="flex text-base dark:text-gray-500 md:text-xl [&>button]:mx-1">
            <IconButton onClick={() => alert('face')}>
              <ImFacebook />
            </IconButton>
            <IconButton onClick={() => alert('face')}>
              <ImTwitter />
            </IconButton>
            <IconButton onClick={() => alert('face')}>
              <ImInstagram />
            </IconButton>
            <IconButton onClick={() => alert('face')}>
              <ImYoutube />
            </IconButton>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
