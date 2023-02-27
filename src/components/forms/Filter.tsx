import { CheckBox } from 'components';

import type { BooleanObjectT } from 'types';
interface FProps {
  filterV: BooleanObjectT;
  setFilterV: React.Dispatch<React.SetStateAction<BooleanObjectT>>;
}

const Filter = ({ filterV, setFilterV }: FProps) :JSX.Element => {
  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFilterV({ ...filterV, [e.target.value]: e.target.checked });
  };

  return (
    <div className="flex md:flex-col">
      {Object.entries(filterV).map(([key, value]) => (
        <CheckBox
          key={key}
          color="green"
          value={key}
          textColor="green"
          changeHandler={changeHandler}
        />
      ))}
    </div>
  );
};
export default Filter;
