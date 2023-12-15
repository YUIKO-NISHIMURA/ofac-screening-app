// DateSelector.tsx
import React from 'react';

interface DateSelectorProps {
  label: string;
  name: string;
  value: string;
  options: string[] | number[];
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  widthHalf?: boolean;
}

const DateSelector: React.FC<DateSelectorProps> = ({ label, name, value, options, onChange, widthHalf }) => {
  return (
    <div className={`relative w-${widthHalf ? '1/2' : '1/4'}`}>
      <label htmlFor={name} className='absolute left-2 text-xs py-1 text-gray-500'>
        {label}
      </label>
      <select
        name={name}
        value={value}
        onChange={onChange}
        className={`w-full pt-5 p-2 border border-gray-300 rounded h-12 focus:border-y-green outline-none`}
      >
        <option disabled value=""></option>
        {options.map((item, index) => (
          <option key={index} value={item}>
            {item}
          </option>
        ))}
      </select>
    </div>
  );
};

export default DateSelector;
