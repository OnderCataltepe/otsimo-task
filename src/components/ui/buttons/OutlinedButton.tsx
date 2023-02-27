import type { StringObjectT } from 'types';

interface OBProps {
  text: string;
  color: string;
  size: string;
  onClick: () => void;
}

const OutlinedButton = ({ text, onClick, color, size }: OBProps): JSX.Element => {
  const colors: StringObjectT = {
    green: 'hover:bg-green-500 text-green-700  hover:text-white  border-green-500',
    red: 'hover:bg-red-500 text-red-700  hover:text-white  border-red-500',
    orange: ' hover:bg-orange-500 text-orange-700  hover:text-white  border-orange-500 ',
    black: ' hover:bg-black text-black  hover:text-white  border-black '
  };
  const sizes: StringObjectT = {
    medium: 'md:text-xl text-base',
    large: 'md:text-3xl text-xl',
    xlarge: 'md:text-5xl text-3xl'
  };
  return (
    <button
      onClick={onClick}
      className={`${sizes[size]} ${colors[color]} rounded-lg border bg-transparent py-1 px-6 font-lato font-semibold tracking-wide duration-300 hover:border-transparent md:px-8`}>
      {text}
    </button>
  );
};

export default OutlinedButton;
