
import React from 'react';

interface DateSelectorProps {
  label: string;
  name: string;
  value: string;
  options: string[] | number[];
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  onBlur: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  hasError?: boolean;
  errorMessage?: string;
}

const DateSelector: React.FC<DateSelectorProps> = ({ label, name, value, options, onChange, onBlur, hasError, errorMessage }) => {
  return (
    <div className={`relative ${name === 'birthMonth' && 'col-span-2'}`}>
      <label htmlFor={name} className='absolute left-2 text-xs py-1 text-gray-500'>
        {label}
      </label>
      <div>
        <select
          name={name}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
          className={`w-full pt-5 pb-1 px-2 border rounded h-12 focus:outline-none ${hasError ? 'border-red-500' : 'border-gray-300'}`}
        >
          <option disabled value=""></option>
          {options.map((item, index) => (
            <option key={index} value={item}>
              {item}
            </option>
          ))}
        </select>
        {hasError && label === 'Month' && <p className="text-red-500 text-xs">{errorMessage}</p>}
      </div>
    </div>
  );
};

export default DateSelector;
