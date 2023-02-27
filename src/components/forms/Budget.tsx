import { RangeInput } from 'components';
import { useState } from 'react';
interface BProps {
  text: string;
  sendBudget: (value: string) => void;
}

const Budget = ({ sendBudget, text }: BProps): JSX.Element => {
  const [budget, setBudget] = useState('2');
  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setBudget(e.target.value);
  };
  const submitHandler = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    sendBudget(budget);
  };
  return (
    <div>
      <form onSubmit={submitHandler} className="flex w-full items-center justify-between">
        <RangeInput
          name="rusf"
          min="0"
          step="0.25"
          max="10"
          onChange={changeHandler}
          value={budget}
          labelText="Budget"
        />
        <button
          type="submit"
          className="rounded bg-blue-500 py-1 px-4 font-bold text-white hover:bg-blue-700">
          {text}
        </button>
      </form>
    </div>
  );
};

export default Budget;
