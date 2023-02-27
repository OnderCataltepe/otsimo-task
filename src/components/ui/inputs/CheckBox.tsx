import type { StringObjectT } from 'types';
interface CBProps {
  value: string;
  changeHandler: (e: React.ChangeEvent<HTMLInputElement>) => void;
  color: string;
  textColor: string;
}

const CheckBox = ({ value, changeHandler, color, textColor }: CBProps): JSX.Element => {
  const colors: StringObjectT = {
    green:
      'accent-green-600 bg-gray-100 border-gray-300 rounded focus:ring-green-500 dark:focus:ring-green-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600'
  };
  const textColors: StringObjectT = {
    green: 'text-green-600'
  };

  return (
    <div className="flex items-center">
      <input
        id={`${value}-checkbox`}
        type="checkbox"
        value={value}
        onChange={changeHandler}
        className={`h-4 w-4 cursor-pointer ${colors[color]}`}
      />
      <label
        htmlFor={`${value}-checkbox`}
        className={`mx-2 text-sm font-medium md:text-base ${textColors[textColor]}`}>
        {value}
      </label>
    </div>
  );
};
export default CheckBox;
