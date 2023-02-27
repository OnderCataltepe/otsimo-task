import { RadioGroup as RGroup } from '@headlessui/react';
import { BsCheckCircleFill } from 'react-icons/bs';

import type { SelectedIngredientT, IngredientDetailsT } from 'types';
interface RGProps {
  items: IngredientDetailsT;
  selected: SelectedIngredientT[];
  setSelected: React.Dispatch<React.SetStateAction<SelectedIngredientT[]>>;
}

const RadioGroup = ({ items, selected, setSelected }: RGProps): JSX.Element => {
  const checkedEl = selected.find((el) => el.name === items.name)!;

  const changeHandler = (value: SelectedIngredientT): void => {
    const newSelected = selected.map((item) =>
      item.name === items.name
        ? { name: item.name, price: value.price, score: value.score, quality: value.quality }
        : item
    );
    setSelected(newSelected);
  };

  return (
    <RGroup
      className="w-full p-1 md:p-4"
      value={selected.find((item) => item.name === items.name)}
      onChange={changeHandler}>
      <RGroup.Label className="sr-only">Server size</RGroup.Label>
      <div className="flex flex-col items-center justify-between md:flex-row">
        {items.details.map((item) => (
          <RGroup.Option
            key={item.name}
            value={item}
            className={` my-1 w-full md:my-0 md:w-[32%]
                  ${
                    checkedEl.score === item.score
                      ? 'bg-sky-900 bg-opacity-75 text-white'
                      : 'bg-white'
                  }
                    relative flex cursor-pointer rounded-lg px-2 py-4 shadow-md focus:outline-none`}>
            <div className="flex w-full items-center justify-between">
              <p className="flex md:hidden">{item.quality}</p>
              <div className="text-sm">
                <RGroup.Label
                  as="p"
                  className={`font-medium  ${
                    checkedEl.score === item.score ? 'text-white' : 'text-gray-900'
                  }`}>
                  {item.name}
                </RGroup.Label>
                <RGroup.Description
                  as="span"
                  className={`flex flex-col items-end md:items-start ${
                    checkedEl.score === item.score ? 'text-sky-100' : 'text-gray-500'
                  }`}>
                  <p>
                    Price: <span className="text-base font-semibold">{item.price}$</span>{' '}
                  </p>
                  <p>
                    Quality Score: <span className="text-base font-semibold">{item.score}</span>{' '}
                  </p>
                </RGroup.Description>
              </div>

              {checkedEl.score === item.score && (
                <div className=" text-white">
                  <BsCheckCircleFill className="h-6 w-6" />
                </div>
              )}
            </div>
          </RGroup.Option>
        ))}
      </div>
    </RGroup>
  );
};

export default RadioGroup;
