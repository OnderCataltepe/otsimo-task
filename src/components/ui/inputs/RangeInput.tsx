// eslint-disable-next-line react/prop-types

interface RIProps {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value: string;
  name: string;
  max: string;
  min: string;
  step: string;
  labelText: string;
}
const RangeInput = ({ onChange, value, name, max, min, step, labelText }: RIProps) => {
  return (
    <div className="flex w-3/5 flex-col">
      <label htmlFor={name} className="dark:text-white">
        {labelText}: <span className="text-lg font-semibold">{value}$</span>
      </label>
      <input
        name={name}
        type="range"
        min={min}
        step={step}
        max={max}
        onChange={onChange}
        value={value}
      />
    </div>
  );
};

export default RangeInput;
